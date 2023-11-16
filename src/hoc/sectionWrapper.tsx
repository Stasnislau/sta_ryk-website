import { motion } from "framer-motion"
import React from "react"

import { styles } from "../styles"
import { staggerContainer } from "../utils/motion"


interface SectionWrapperProps {
    Component: React.FC;
    idName: string;
}
const SectionWrapper = ({ Component, idName }: SectionWrapperProps) =>
    function Hoc() {
        return (
            <motion.section
                variants={staggerContainer()}
                initial="hidden"
                animate="show"
                viewport={{
                    once: true,
                    amount: 0.25
                }}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            >
                <Component />
            </motion.section>
        )
    }

export default SectionWrapper