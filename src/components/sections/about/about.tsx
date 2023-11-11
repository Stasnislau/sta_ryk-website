import ScrollMessage from "../../interactives/scrollDown";
import UniProgress from "../../interactives/uniProgress";

const AboutSection = () => {
    return (
        <div className="flex flex-col pl-8 pr-4 overflow-hidden">
            <div className="flex flex-col text-3xl ">About</div>
            <p className="text-lg pt-2 slide-in-from-right">
                Hey there! My name is Stanislau and I am a web developer, who is based in <span className="text-red-500"> Warsaw, Poland</span>.
            </p>
            <p className="text-lg pt-2 slide-in-from-right">
                I am currently studying Computer Science at Warsaw University of Technology and working as a freelance web developer.
            </p>
            <UniProgress />
            <div className="scroll-down-message w-full flex grow relative">
                <ScrollMessage />
            </div>
        </div>
    );
}

export default AboutSection;