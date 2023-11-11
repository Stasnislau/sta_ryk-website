import { useEffect, useState } from 'react';

const UniProgress = () => {
    const [progress, setProgress] = useState(0);
    const [filledWidth, setFilledWidth] = useState(0);

    useEffect(() => {
        const endDate = new Date('2025-10-01');
        const startDate = new Date('2021-10-01');
        const today = new Date();
        const totalDuration = endDate.getTime() - startDate.getTime();
        const elapsedDuration = today.getTime() - startDate.getTime();
        console.log (totalDuration, elapsedDuration, "totalDuration, elapsedDuration")
        const progress = (elapsedDuration / totalDuration) * 100;
        setProgress(progress);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log(progress)
            setFilledWidth(progress);
        }, 200);

        return () => clearTimeout(timer); 
    }, [progress]);

    return (
        <div className="flex flex-col mt-6 p-2 ">
            <p className="text-lg text-pwColor text-center">
                Warsaw University of Technology
            </p>
            <div className="flex flex-row justify-between">
                <p className="text-sm">
                    2021 - 2025
                </p>
                <p className="in-progress text-sm">In Progress</p>
            </div>
            <div className="flex flex-col">
                <p className="pt-2">
                    Computer Science (BSc)
                </p>
            </div>
            <div className="w-full">
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full transition-all duration-700 ease-in-out" style={{width: `${filledWidth}%`, backgroundColor: 'blue'}}></div>
                </div>
            </div>
        </div>
    )
}

export default UniProgress;