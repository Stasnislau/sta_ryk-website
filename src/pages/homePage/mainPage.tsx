
import { useEffect } from 'react';
import './index.scss';
const MainPage = () => {
    const setScrollValue = () => {
        const htmlElement = document.documentElement;
        const percentOfScreenHeightScrolled = htmlElement.scrollTop / htmlElement.clientHeight;
        console.log(Math.min(percentOfScreenHeightScrolled * 100, 100))
        htmlElement.style.setProperty('--scroll', Math.min(percentOfScreenHeightScrolled * 100, 100).toString());
    }
    useEffect(() => {
        window.addEventListener('scroll', setScrollValue);
        window.addEventListener('resize', setScrollValue);
    }, [])
    return (
        <div className="w-full flex flex-col sections-container ">
            <section className="w-full h-screen flex-grow-1 top-0 top-section sticky">
                <div className="w-full h-full flex flex-row items-center">
                    <div className='w-6/12 h-full left'> About me section </div>
                    <div className='w-6/12 h-full right'> reference</div>
                </div>
            </section>
            <section className="w-full h-screen flex-grow-1 bg-yellow-50 text-gray-600 mt-100">
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