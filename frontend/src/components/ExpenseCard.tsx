import { FC } from "react"
import { ExpenseType } from "../contexts/BudgetContext"

const ExpenseCard: FC<ExpenseType> = ({ category, amount, description }) => {
    return (
        <div className="flex flex-col h-fit text-left rounded-md border px-2 py-2 min-w-52">
            <p className="text-lg font-medium">{description}</p>
            <p className="text-sm">{category}</p>
            <p className="text-sm">${amount}</p>
        </div>
    )
}

export default ExpenseCard