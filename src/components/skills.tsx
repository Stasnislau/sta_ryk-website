import { SectionWrapper } from "../hoc"
import { technologies} from "../constants"
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";


const SkillCard = ({ tech, index }: {
    tech: {
        name: string;
        icon: string;
    },
    index: number;

}) => {
    return (
        <motion.div variants={fadeIn("up", "string", index * 0.5, 0.75)}>
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
                    <SkillCard key={tech.name} tech={tech} index={index} />
                ))}
            </div>
            
        </>
    )
}

const SkillsSection = SectionWrapper({
    Component: Skills,
    idName: "",
})

export default SkillsSection