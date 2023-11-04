
import { useEffect } from 'react';
import './index.scss';
import Header from '../../components/header/header';
const MainPage = () => {
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
            <div className="w-full h-20 flex flex-row">
                <Header />
            </div>
            <section className="w-full h-screen flex-grow-1 top-0 top-section sticky">
                <div className="w-full h-full flex flex-row items-center">
                    <div className='w-6/12 h-full left'/>
                    <div className='w-6/12 h-full right'> reference</div>
                </div>
            </section>
            <section className="w-full h-screen flex-grow-1 mt-100 first-section">
                experience section
            </section>
            <section className="w-full h-screen flex-grow-1">
                Projects section
            </section>

            <section className="w-full h-screen flex-grow-1">
                Contact section
            </section>

        </div>
    );
}

export default MainPage;