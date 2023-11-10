
import { useEffect, useRef } from 'react';
import './index.scss';
import Header from '../../components/header/header';
import AboutSection from '../../components/sections/about/about';
const MainPage = () => {
    const aboutRef = useRef<HTMLDivElement>(null);
    const experienceRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);
    const setScrollValue = () => {
        const htmlElement = document.documentElement;
        const percentOfScreenHeightScrolled = htmlElement.scrollTop / htmlElement.clientHeight;
        htmlElement.style.setProperty('--scroll', Math.min(percentOfScreenHeightScrolled * 100, 100).toString());
    }
    useEffect(() => {
        window.addEventListener('scroll', setScrollValue);
        window.addEventListener('resize', setScrollValue);
    }, [])
    return (
        <div className="w-full flex flex-col sections-container ">
            <div className="w-full h-20 flex flex-row ">
                <Header
                    aboutRef={aboutRef}
                    experienceRef={experienceRef}
                    projectsRef={projectsRef}
                    contactRef={contactRef}
                />
            </div>
            <section className="w-full h-screen top-0 top-section sticky" ref={aboutRef}>
                <div className="w-full h-full flex flex-row items-center flex-grow-1">
                    <div className='tablet:w-6/12 h-full left mobile:w-0' />
                    <div className='tablet:w-6/12 h-full mobile:w-full right'><AboutSection /></div>
                </div>
            </section>
            <section className="w-full h-screen flex-grow-1 mt-100 first-section" ref={experienceRef}>
                experience section
            </section>
            <section className="w-full h-screen flex-grow-1" ref={projectsRef}>
                Projects section
            </section>

            <section className="w-full h-screen flex-grow-1" ref={contactRef}>
                Contact section
            </section>

        </div>
    );
}

export default MainPage;