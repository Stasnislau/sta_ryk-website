import React from 'react';

type HeaderProps = {
    aboutRef?: React.RefObject<HTMLDivElement>;
    experienceRef?: React.RefObject<HTMLDivElement>;
    projectsRef?: React.RefObject<HTMLDivElement>;
    contactRef?: React.RefObject<HTMLDivElement>;
};

const Header = (
    { aboutRef, experienceRef, projectsRef, contactRef }: HeaderProps
) => { // add references to all the sections
    return (
        <header className="flex flex-grow-1 w-full flex-row justify-between align-center">
            <div className="flex flex-row icons items-center w-3/12 gap-2">
                <a href="
                https://www.linkedin.com/in/staryk/">
                    <img src="/icons/linkedin.svg" alt="linkedin" className='h-10' />
                </a>
                <a href="https://github.com/Stasnislau">
                    <img src="/icons/github.svg" alt="github" className='h-10' />
                </a>

            </div>
            <div className="flex flex-row buttons flex-grow justify-between ">
                <button onClick={() => aboutRef?.current?.scrollIntoView({ behavior: 'smooth' })}>About</button>
                <button onClick={() => experienceRef?.current?.scrollIntoView({ behavior: 'smooth' })}>Experience</button>
                <button onClick={() => projectsRef?.current?.scrollIntoView({ behavior: 'smooth' })}>Projects</button>
                <button onClick={() => contactRef?.current?.scrollIntoView({ behavior: 'smooth' })}>Contact</button>
            </div>
        </header>
    );
}

export default Header;