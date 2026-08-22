import { mkdir, readFile, readdir, rename, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const distDirectory = fileURLToPath(new URL('../dist/', import.meta.url));

async function relocate(source, destination) {
  await mkdir(join(distDirectory, destination, '..'), { recursive: true });
  await rename(join(distDirectory, source), join(distDirectory, destination));
}

async function relocateBlogPosts(directory) {
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const entryPath = join(directory, entry.name);

    if (entry.isDirectory()) {
      await relocateBlogPosts(entryPath);
      continue;
    }

    if (!entry.name.endsWith('.html') || entry.name === 'index.html') continue;

    const destinationDirectory = join(directory, entry.name.slice(0, -'.html'.length));
    await mkdir(destinationDirectory, { recursive: true });
    await rename(entryPath, join(destinationDirectory, 'index.html'));
  }
}

async function findHtmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const htmlFiles = [];

  for (const entry of entries) {
    const entryPath = join(directory, entry.name);

    if (entry.isDirectory()) {
      htmlFiles.push(...(await findHtmlFiles(entryPath)));
    } else if (entry.name.endsWith('.html')) {
      htmlFiles.push(entryPath);
    }
  }

  return htmlFiles;
}

function escapeXml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

async function writeSitemap() {
  const htmlFiles = await findHtmlFiles(distDirectory);
  const canonicalUrls = new Set();

  for (const htmlFile of htmlFiles) {
    if (htmlFile === join(distDirectory, '404.html')) continue;

    const html = await readFile(htmlFile, 'utf8');
    const canonicalUrl = html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1];

    if (!canonicalUrl) {
      throw new Error(`Missing canonical URL in ${htmlFile}`);
    }

    canonicalUrls.add(new URL(canonicalUrl).href);
  }

  const urls = [...canonicalUrls]
    .sort()
    .map((url) => `  <url>\n    <loc>${escapeXml(url)}</loc>\n  </url>`)
    .join('\n');
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  await writeFile(join(distDirectory, 'sitemap.xml'), sitemap);
}

await relocate('de.html', 'de/index.html');
await relocate('blog.html', 'blog/index.html');
await relocate('de/blog.html', 'de/blog/index.html');
await relocateBlogPosts(join(distDirectory, 'blog'));
await writeSitemap();
