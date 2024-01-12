import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";

import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

interface ServiceCardProps {
    title: string;
    index: number;
    icon: string;
}

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
    return (
        <Tilt className="xs:w-[250px] w-full" options={{
            max: 45,
            scale: 1,
            speed: 450,
        }}>
            <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
                <div
                    className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
                >
                    <img src={icon} alt="icon" className="w-16 h-16 object-contain" />
                    <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
                </div>
            </motion.div>
        </Tilt >
    );
}

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>
            <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]" >
                I am a full-stack developer based in Warsaw, Poland. I have over 1.5 years of experience in web development and I am currently studying computer science at Warsaw University of Technology. <a className="text-[#915eff]" href="CV/CV_web.pdf">Download CV.</a>
            </motion.p>
            <div className="mt-20 flex flex-wrap gap-10">
                {
                    services.map((service, index) => (
                        <ServiceCard key={service.title} index={index} title={service.title} icon={service.icon} />
                    ))
                }
            </div>
        </>
    );
}

const AboutSection = SectionWrapper({
    Component: About,
    idName: "about"
});

export default AboutSection;