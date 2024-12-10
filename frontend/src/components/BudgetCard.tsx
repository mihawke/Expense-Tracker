import { FC } from "react"
import { BudgetTypes } from "../contexts/BudgetContext"

const BudgetCard: FC<BudgetTypes> = ({ category, amount }) => {
    return (
        <div
            className="w-full max-w-sm bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500"
        >
            <p className="text-lg font-medium">{category}</p>
            <p className="text-sm">${amount}</p>
        </div>
    )
}

export default BudgetCard