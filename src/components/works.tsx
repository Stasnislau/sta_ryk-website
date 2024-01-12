import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'

import { github, live } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'

import { fadeIn, textVariant } from "../utils/motion"

interface ProjectCardProps {
    project: {
        name: string;
        tags: {
            name: string;
            color: string;
        }[];
        description: string;
        image: string;
        source_code_link: string;
        live_link?: string;
    }
    index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
    return (
        <motion.div variants={fadeIn("up", "string", index * 0.5, 0.75)}>
            <Tilt
                max={45}
                scale={1.0}
                speed={450}
                className="bg-tertiary p-5 rounded-2xl sm:w-[300px] w-full"
            >
                <div className='relative w-full h-[230px]'>
                    <img
                        className='w-full h-full object-cover rounded-2xl'
                        src={project.image}
                        alt={project.name}
                    />
                    <div className='absolute inset-0 flex justify-between m-3 card-img_hover'
                    >
                        <div onClick={() => window.open(project.source_code_link, "_blank")} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
                            <img src={github} alt="github" />
                        </div>
                        {project.live_link && (
                            <div onClick={() => window.open(project.live_link, "_blank")} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
                                <img src={live} alt="github" />
                            </div>
                        )}
                    </div>
                </div>

                <div className='mt-5'>
                    <h3 className='text-white text-[24px] font-bold'>{project.name}</h3>
                    <p className='text-secondary text-[14px] mt-2'>{project.description}</p>
                </div>

                <div className='mt-4 flex flex-wrap gap-2'>
                    {project.tags.map((tag) => (
                        <p key={tag.name} className={`text-secondary text-[14px] ${tag.color}`}>{tag.name}</p>
                    ))}
                </div>
            </Tilt>
        </motion.div >
    )
}

const Works = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>My work</p>
                <h2 className={styles.sectionHeadText}>Projects.</h2>
            </motion.div>
            <div className='w-full flex'
            >
                <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]' >
                    Here are some of my projects that I have worked on.
                </motion.p>
            </div>
            <div className="mt-20 flex flex-wrap gap-7">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.name}
                        index={index}
                        project={project}
                    />
                ))}
            </div>
        </>
    )
}



const WorksSection = SectionWrapper({
    Component: Works,
    idName: "work",
})

export default WorksSection