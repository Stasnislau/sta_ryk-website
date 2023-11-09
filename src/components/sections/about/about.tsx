import UniProgress from "../../interactives/uniProgress";

const AboutSection = () => {
    return (
        <div className="flex flex-col pl-8 pr-4">
            <div className="flex flex-col text-3xl ">About</div>
            <p className="pt-8">
                I am currently working as a freelance web developer and I am
                looking for new opportunities to learn and grow as a developer.
            </p>
            <UniProgress />
            

            <div className="about-section__content__text__buttons">
            </div>
        </div>
    );
}

export default AboutSection;