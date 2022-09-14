import LinkedInIcon from '../assets/linkedin_light.svg'
import GitHubIcon from '../assets/github_light.svg'

export function Header() {
    return (
        <header class="w-full min-h-screen bg-hero bg-top bg-cover" id="top">
            <div class="mx-auto">
                <nav class="flex justify-end items-center p-6 z-10">
                    <span class="flex z-10">
                        <a
                            href="https://github.com/bastianjakobi"
                            target="_blank"
                            rel="noopener"
                            class="rounded-full bg-customDarkBlue flex items-center justify-center h-10 w-10 shadow-lg cursor-pointer hover:bg-customDarkerBlue mr-4"
                        >
                            <img src={GitHubIcon} class="w-6 h-6" alt="Github Logo" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/bastian-jakobi-ba6792186/"
                            target="_blank"
                            rel="noopener"
                            class="rounded-full bg-customDarkBlue flex items-center justify-center h-10 w-10 shadow-lg cursor-pointer hover:bg-customDarkerBlue"
                        >
                            <img src={LinkedInIcon} class="w-6 h-6" alt="LinkedIn Logo" />
                        </a>
                    </span>
                </nav>
                <div
                    class=" bg-colors-slate-100 md:bg-opacity-0 md:bg-gradient-to-r md:from-colors-slate-50 md:via-colors-slate-100 bg-opacity-60 min-h-screen w-full md:w-5/6 lg:w-3/4 xl:w-4/6 z-0 flex items-center absolute top-0"
                >
                    <div class="pl-6 w-full md:pl-20 pr-3 md:pr-0">
                        <h1 class="font-heading text-4xl sm:text-6xl xl:text-7xl text-customDarkBlue">
                            Bastian Jakobi
                        </h1>
                        <p class="font-body text-xl mt-2 sm:text-2xl xl:text-2xl xl:pr-36 text-customDarkerBlue">
                            Fullstack-Softwareentwickler mit großem Interesse an Webtechnologien, UI/UX und Projektmanagement.
                        </p>
                        <div class="mt-4 flex xl:mt-10">
                            <a
                                data-scroll
                                href="#ueberMich"
                                class="px-5 py-2 mr-4 rounded-md bg-customDarkBlue hover:bg-customDarkerBlue text-white font-body"
                            >Über mich</a
                            >
                            <a
                                data-scroll
                                href="#projekte"
                                class="px-5 py-2 rounded-md bg-customDarkBlue hover:bg-customDarkerBlue text-white font-body"
                            >Projekte ansehen</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
