type ProjectProps = {
    name: string;
    description: string;
    projectUrl: string;
    githubUrl?: string;
    alignEnd: boolean;
};

type Input = {
    project: ProjectProps;
};

export function Project(props: Input) {
    return (
        <div
            class={props.project.alignEnd == true ? 'md:self-end w-full md:w-7/12 flex mb-8' : 'w-full md:w-7/12 flex mb-8'}
        >
            <div class="rounded-lg h-auto w-full shadow-xl bg-colors-slate-100 bg-opacity-80">
                <div class="p-6">
                    <h3 class="font-heading text-xl text-customDarkBlue mb-2">{props.project.name}</h3>
                    <hr class="mb-2" />
                    <p class="font-body">
                        {props.project.description}
                    </p>
                    <a
                        href={props.project.projectUrl}
                        target="_blank"
                        rel="noopener"
                        class="px-5 py-2 mr-4 mt-4 w-full md:w-auto rounded-md text-center block md:inline-block bg-customDarkBlue hover:bg-customDarkerBlue text-white font-body"
                    >Projekt ansehen</a
                    >
                    {
                        props.project.githubUrl && (
                            <a
                                href={props.project.githubUrl}
                                target="_blank"
                                rel="noopener"
                                class="px-5 py-2 mt-4 rounded-md text-center block md:inline-block w-full md:w-auto bg-customDarkBlue hover:bg-customDarkerBlue text-white font-body"
                            >Code ansehen</a>
                        )
                    }

                </div>
            </div>
        </div>
    );
}