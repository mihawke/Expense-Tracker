import { FC } from "react"
import { BudgetTypes } from "../contexts/BudgetContext"

const BudgetCard: FC<BudgetTypes> = ({ category, amount }) => {
    return (
        <div className="flex flex-col h-fit text-left rounded-md border px-2 py-2 min-w-52">
            <p className="text-lg font-medium">{category}</p>
            <p className="text-sm">${amount}</p>
        </div>
    )
}

export default BudgetCard