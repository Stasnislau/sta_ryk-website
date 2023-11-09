const UniProgress = () => {
    return (
        <div className="flex flex-col">
            <p className="pt-6">
                Warsaw University of Technology
            </p>
            <div className="flex flex-row justify-between">

                <p>
                    2021 - 2025
                </p>
                <p className="in-progress">In Progress</p>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-8">
                <p className="pt-6">
                    Computer Science (BSc)
                </p>
            </div>
            <div className="book-spinner"></div>
        </div>
    )
}

export default UniProgress;