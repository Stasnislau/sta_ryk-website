import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";

import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>
            <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]" >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deleniti sequi necessitatibus tenetur voluptatem rem, possimus ratione odio libero similique obcaecati dicta neque. Quisquam ex iste blanditiis quam possimus. Id!
            </motion.p>
        </>
    );
}

export default About;