import { useEffect, useState } from 'react';

interface SliderProps {
    name: string;
    percent: number;
    color: string;
}

const Slider = ({
    name,
    percent,
    color,
}: SliderProps) => {
    const [filledWidth, setFilledWidth] = useState(0);
    const finalColor = color || 'blue';

    useEffect(() => {
        const timer = setTimeout(() => {
            setFilledWidth(percent);
        }, 100); // delay of 0.1 second

        return () => clearTimeout(timer); // cleanup on unmount
    }, [percent]);

    return (
        <div className="w-full">
            <div className="text-center">{name}</div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full transition-all duration-500" style={{width: `${filledWidth}%`, backgroundColor: finalColor}}></div>
            </div>
        </div>
    );
}

export default Slider;