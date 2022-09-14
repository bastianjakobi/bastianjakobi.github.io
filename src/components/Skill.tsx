type SkillProps = {
    name: string;
}

function Skill(props: SkillProps) {
    return (
        <div class="my-2 mr-4 px-3 py-1 rounded ring-2 ring-customDarkBlue text-customDarkBlue justify-center inline-flex">
            {props.name}
        </div>
    )
}

export default Skill