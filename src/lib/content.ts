import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '../content/home';

export async function getProjects(locale: Locale): Promise<CollectionEntry<'projects'>[]> {
  const projects = await getCollection(
    'projects',
    ({ data }) => data.locale === locale && !data.draft,
  );

  return projects.sort((a, b) => a.data.order - b.data.order);
}

export async function getPublishedBlogPosts(): Promise<CollectionEntry<'blog'>[]> {
  const posts = await getCollection('blog', ({ data }) => !data.draft);

  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function getBlogPostPath(post: CollectionEntry<'blog'>): string {
  return `/blog/${post.id}/`;
}
