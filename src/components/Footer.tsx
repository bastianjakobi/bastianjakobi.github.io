import LinkedInIcon from "../assets/linkedin.svg";
import GitHubIcon from "../assets/github.svg";
import MailIcon from "../assets/mail.svg";

function Footer() {
  return (
    <footer id="footer" class="pb-8 mt-4 md:mt-0 bg-customDarkerBlue text-colors-slate-100">
      <div class="pt-12 flex items-center justify-center">
        <div class="w-3/5 text-center flex flex-col">
          <h2 class="font-heading text-2xl">&copy; Bastian Jakobi {new Date().getFullYear()}</h2>
          <span class="flex self-center mt-7">
            <a
              href="https://github.com/bastianjakobi"
              target="_blank"
              rel="noopener"
              class="rounded-full bg-colors-slate-50 flex items-center justify-center h-10 w-10 shadow-lg cursor-pointer hover:bg-colors-slate-200 mr-4"
            >
              <img src={GitHubIcon} class="w-6 h-6" alt="Github Logo" />
            </a>
            <a
              href="https://www.linkedin.com/in/bastian-jakobi-ba6792186/"
              target="_blank"
              rel="noopener"
              class="rounded-full bg-colors-slate-50 flex items-center justify-center h-10 w-10 shadow-lg cursor-pointer hover:bg-colors-slate-200 mr-4"
            >
              <img src={LinkedInIcon} class="w-6 h-6" alt="LinkedIn Logo" />
            </a>
            <a
              href="mailto:hello@bastianjakobi.com?subject=Neue%20Kontaktanfrage"
              target="_blank"
              rel="noopener"
              class="rounded-full bg-colors-slate-50 flex items-center justify-center h-10 w-10 shadow-lg cursor-pointer hover:bg-colors-slate-200"
            >
              <img src={MailIcon} class="w-6 h-6" alt="Mail Icon" />
            </a>
          </span>
          <div class="mt-7 underline">
            <a href="./docs/impressum.html" class="block text-lg" target="_blank" rel="noopener">
              Impressum
            </a>
            <a href="./docs/dsgvo.html" class="block text-lg mt-2" target="_blank" rel="noopener">
              Datenschutzerklärung
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
