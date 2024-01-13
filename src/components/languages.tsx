import { SectionWrapper } from "../hoc"
import { languages } from "../constants"
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";


const LanguageCard = ({ language, index }:
    {
        language: {
            name: string;
            level: string;
            progress: number;
        },
        index: number;
    }) => {
    return (
        <motion.div variants={fadeIn("up", "string", index * 0.5, 0.75)} custom={index}>
            <div className="flex flex-col items-center justify-center text-center">
                <p className="text-white text-[14px] mb-2">{language.name}</p>
                <div className="relative w-32 h-32 p-4">
                    <div className="relative w-full h-full rounded-full bg-tertiary opacity-100">
                        <div className="absolute top-0 left-0 w-full h-full border-[10px] rounded-full bg-tertiary"></div>
                        <div className="absolute top-0 left-0 w-full h-full rounded-full items-center align-center justify-center flex flex-col"
                            style={{
                                background: `conic-gradient(#915eff 0% ${language.progress}%, transparent 0% 100%)`,
                            }}
                        >
                            <div className="absolute w-[calc(100%-15px)] h-[calc(100%-15px)] rounded-full bg-tertiary" />
                            <div className="absolute flex flex-row items-center justify-center h-full">
                                <p className="text-white text-lg">{language.level}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </motion.div>
    );
};

const Languages = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Let's talk</p>
                <h2 className={styles.sectionHeadText}>Languages.</h2>
            </motion.div>
            <div className="flex flex-row flex-wrap gap-10">
                {languages.map((language, index) => (
                    <LanguageCard key={language.name} language={language} index={index} />
                ))}
            </div>
        </>
    )
}

const LanguagesSection = SectionWrapper({
    Component: Languages,
    idName: "",
})

export default LanguagesSection