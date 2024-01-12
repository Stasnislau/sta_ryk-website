import { SectionWrapper } from "../hoc"
import { technologies, languages } from "../constants"
import { motion } from "framer-motion";
import { styles } from "../styles";
import { slideIn, textVariant } from "../utils/motion";


const SkillCard = ({ tech }: {
    tech: {
        name: string;
        icon: string;
    },

}) => {
    return (
        <div className="flex flex-col items-center justify-center bg-tertiary rounded-[20px] shadow-card p-4 w-32 h-32">
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <img
                    src={tech.icon} alt={tech.name} className="w-16 h-16 object-contain" />
                <p className="text-white text-[14px] mt-2">{tech.name}</p>
            </motion.div>
        </div>
    )
}
const LanguageBar = ({ language, index }: {
    language: {
        name: string;
        level: string;
        progress: number; // 0 - 100
    },
    index: number;
}) => {
    return (
        <motion.div
        // variants={slideIn(
        //     "left",
        //     "spring",
        //     0.5 * index,
        //     0.75
        // )}
        >
            <div
                className="flex flex-col justify-center bg-tertiary rounded-[20px] shadow-card p-4 w-full h-24">
                <div className="flex flex-row">
                    <p className="text-white text-[14px]">{language.name}</p>
                    <div className="border border-white w-full " >
                        <motion.div
                            animate={{ width: `${language.progress}%` }}
                            style={{
                                display: "flex",
                                backgroundColor: "#915eff",
                                width: "0%",
                                height: "100%",
                                alignContent: "left",
                                justifyContent: "left",
                            }}
                            transition={
                                {
                                    duration: 1,
                                    type: "spring",
                                    bounce: 0.25,
                                }
                            }
                        />
                    </div>
                    <p className="text-white text-[14px]">{language.level}</p>
                </div>
            </div>

        </motion.div >

    )
}

const Skills = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>What I can do</p>
                <h2 className={styles.sectionHeadText}>Skills</h2>
            </motion.div>
            <div className="flex flex-row flex-wrap justify-center gap-10 mb-8">
                {technologies.map((tech, index) => (
                    <SkillCard key={tech.name} tech={tech} />
                ))}
            </div>
            <motion.div variants={textVariant()}>
                <h2 className={styles.sectionHeadText}>Languages.</h2>
            </motion.div>
            <div className="flex flex-col gap-10">
                {languages.map((language, index) => (
                    <LanguageBar key={language.name} language={language} index={index} />
                ))}
            </div>
        </>
    )
}

const TechSection = SectionWrapper({
    Component: Skills,
    idName: "",
})

export default TechSection