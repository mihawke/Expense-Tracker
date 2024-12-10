import { Dispatch, FC, SetStateAction, useState } from "react"
import { useBudgets } from "../hooks/useBudget"

interface ExpenseFormProps {
    isVisible: boolean
    setIsVisible: Dispatch<SetStateAction<boolean>>
}
const ExpenseForm: FC<ExpenseFormProps> = ({ isVisible, setIsVisible }) => {
    const { budgets, setExpenses } = useBudgets();
    const [category, setCategory] = useState('Uncategorized')
    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState<number | ''>('')
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        if (name === 'category') {
            setCategory(value);
        }
        else if (name === 'description') {
            setDescription(value);
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
        if (category != '' && amount != 0 && amount != '' && description != '') {
            setExpenses((prev) => [...prev, { category: category, amount: amount, description: description }])
            setCategory('Uncategorized');
            setAmount('');
            setDescription('')
            setIsVisible(false)
        }
    }
    return (
        <div className={`w-full h-full flex items-center justify-center bg-black bg-opacity-70 fixed z-10 ${isVisible ? '' : 'hidden'}`}>
            <form onSubmit={handleSubmit}
                className="flex flex-col w-full max-w-sm bg-white rounded-lg shadow-lg p-6"
            >
                <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                    Add New Expense
                </h2>

                <label className="text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                    onChange={handleChange}
                    value={category}
                    name="category"
                    className="bg-transparent border border-gray-300 rounded-md px-4 py-2 mb-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                >
                    <option value='Uncategorized'>Uncategorized</option>
                    {budgets.map(item => (
                        <option value={item.category}>{item.category}</option>
                    ))}
                </select>
                <label className="text-sm font-medium text-gray-700 mb-1">Description</label>
                <input
                    type="text"
                    onChange={handleChange}
                    name="description"
                    value={description}
                    className="bg-transparent border border-gray-300 rounded-md px-4 py-2 mb-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
                <label className="text-sm font-medium text-gray-700 mb-1">Expense Amount</label>
                <input
                    type="number"
                    onChange={handleChange}
                    value={amount}
                    name="amount"
                    className="bg-transparent border border-gray-300 rounded-md px-4 py-2 mb-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 shadow-md mb-3"
                >
                    Add Expense
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

export default ExpenseForm