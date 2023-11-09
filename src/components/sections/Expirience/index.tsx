import Slider from '../../slider';

const ExperienceSection = () => {
    return (
        <div className="flex flex-col pl-8 pr-4">
            <div className="flex flex-col text-3xl pt-8">Skills</div>

            <p className="pt-12">
                Frontend
            </p>
            <div className="grid grid-cols-2 gap-4 pt-8">
                <Slider name="JavaScript" percent={90} color="green" />
                <Slider name="React" percent={80} color="green" />
                <Slider name="TypeScript" percent={80} color="green" />
                <Slider name="Next.js" percent={70} color="green" />
                <Slider name="HTML" percent={90} color="green" />
                <Slider name="CSS" percent={85} color="green" />
            </div>
            <p className="pt-12">
                Backend
            </p>
            <div className="grid grid-cols-2 gap-4 pt-8">
                <Slider name="TypeScript" percent={80} color="green" />
                <Slider name="Node.js" percent={70} color="green" />
                <Slider name="Nest.js" percent={70} color="green" />
            </div>
        </div>
    );
}

export default ExperienceSection;