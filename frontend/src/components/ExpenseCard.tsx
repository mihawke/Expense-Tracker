import { FC } from "react"
import { ExpenseType } from "../contexts/BudgetContext"

const ExpenseCard: FC<ExpenseType> = ({ category, amount, description }) => {
    return (
        <div
            className="w-full max-w-sm bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500"
        >
            <p className="text-lg font-medium">{description}</p>
            <p className="text-sm">{category}</p>
            <p className="text-sm">${amount}</p>
        </div>
    )
}

export default ExpenseCard