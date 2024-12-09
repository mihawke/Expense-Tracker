import React, { useContext, useState } from "react"
import { BudgetsContext } from "../contexts/BudgetContext"

const BudgetForm = () => {
    const { setBudgets } = useContext(BudgetsContext)
    const [category, setCategory] = useState('')
    const [amount, setAmount] = useState<number | ''>('')
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        if (name === 'category') {
            setCategory(value);
        }
        else if (name === 'amount') {
            if (value === '') {
                setAmount('');
            } else {
                setAmount(parseFloat(value) || 0);
            }
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (category != '' && amount != 0 && amount != '') {
            setBudgets((prev) => [...prev, { category: category, amount: amount }])
            setCategory('');
            setAmount('')
        }
        else {

        }
    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col text-left">
            <label>Category</label>
            <input
                type="text"
                onChange={handleChange}
                name="category"
                value={category}
                className="border rounded-md px-4 py-2 mb-4"
            />
            <label>Budget Amount</label>
            <input
                type="number"
                onChange={handleChange}
                name="amount"
                value={amount}
                className="border rounded-md px-4 py-2"
            />
            <button type="submit" className="mt-4 bg-blue-600 hover:bg-blue-800 transition-colors duration-150">Add Budget</button>
        </form>
    )
}

export default BudgetForm