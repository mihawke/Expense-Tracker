import { useEffect, useState } from 'react'
import { useBudgets } from '../hooks/useBudget'

const AvailableBudget = () => {
    const [width, setWidth] = useState(0)
    const { totalBudget, totalExpense } = useBudgets()

    useEffect(() => {
        let progressWidth = (totalExpense / totalBudget) * (350)
        setWidth(progressWidth)
    }, [totalBudget, totalExpense])
    return (
        <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-4">
            <div className="flex justify-between items-center mb-4">
                <p className="text-sm font-medium text-gray-600">
                    Spent: <span className="text-gray-900 font-bold">${totalExpense}</span>
                </p>
                <p className="text-sm font-medium text-gray-600">
                    Budget: <span className="text-gray-900 font-bold">${totalBudget}</span>
                </p>
            </div>
            <div className="w-full h-4 bg-gray-200 rounded-full relative overflow-hidden">
                <div
                    className="h-4 bg-amber-500 rounded-full absolute left-0 transition-all duration-300"
                    style={{ width: width }}
                ></div>
            </div>
        </div>

    )
}

export default AvailableBudget