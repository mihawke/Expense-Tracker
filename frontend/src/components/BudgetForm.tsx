import React, { Dispatch, FC, SetStateAction, useContext, useState } from "react"
import { BudgetsContext } from "../contexts/BudgetContext"


interface BudgetFormProps {
    isVisible: boolean
    setIsVisible: Dispatch<SetStateAction<boolean>>
}
const BudgetForm: FC<BudgetFormProps> = ({ isVisible, setIsVisible }) => {
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
        <div
            className={`w-full h-full flex items-center justify-center bg-black bg-opacity-70 fixed z-10 ${isVisible ? '' : 'hidden'
                }`}
        >
            <form
                onSubmit={handleSubmit}
                className="flex flex-col w-full max-w-sm bg-white rounded-lg shadow-lg p-6"
            >
                <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                    Add New Budget
                </h2>

                <label htmlFor="category" className="text-sm font-medium text-gray-700 mb-1">
                    Category
                </label>
                <input
                    id="category"
                    type="text"
                    onChange={handleChange}
                    name="category"
                    value={category}
                    className="bg-transparent border border-gray-300 rounded-md px-4 py-2 mb-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Enter category"
                />

                <label htmlFor="amount" className="text-sm font-medium text-gray-700 mb-1">
                    Budget Amount
                </label>
                <input
                    id="amount"
                    type="number"
                    onChange={handleChange}
                    name="amount"
                    value={amount}
                    className="bg-transparent border border-gray-300 rounded-md px-4 py-2 mb-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Enter amount"
                />

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 shadow-md mb-3"
                >
                    Add Budget
                </button>
                <button
                    type="reset"
                    className="w-full bg-gray-100 text-gray-700 font-medium py-2 rounded-md hover:bg-gray-200 transition-colors duration-200 shadow-md"
                    onClick={() => setIsVisible(false)}
                >
                    Cancel
                </button>
            </form>
        </div>

    )
}

export default BudgetForm