import { Project } from "./Project"

function Projects() {
    const projects = [
        {
            id: 1,
            name: "vRooms",
            description:
                "vRooms ist eine einfache Videochat App und basiert auf Vue.js, Vuetify und der Jitsi IFrame API.",
            projectUrl: "https://vrooms.netlify.app/",
            githubUrl: "https://github.com/bastianjakobi/vRooms",
            alignEnd: false,
        },
        {
            id: 2,
            name: "SimpleToDo (eines meiner ersten Projekte)",
            description:
                "SimpleToDo ist eine auf Javascript und jQuery basierende ToDo-App, die als PWA heruntergeladen werden kann.",
            projectUrl: "https://bastianjakobi-simpletodoapp.netlify.app/",
            githubUrl: "https://github.com/bastianjakobi/simpletodo",
            alignEnd: true,
        },
    ]
    return (
        <section aria-label="Projekte" class="pt-8" id="projekte">
            <div class="pl-6 md:pl-20 pr-6 md:pr-20">
                <div className="mt-4">
                    <h2 class="font-heading text-3xl sm:text-4xl text-customDarkBlue">Projekte</h2>
                    <div class="flex flex-col items-stretch mt-4 w-full">
                        {projects.map((project) => (
                            <Project key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Projects