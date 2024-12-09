import { useState } from "react"
import { useBudgets } from "../hooks/useBudget"

const ExpenseForm = () => {
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
        }
    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col text-left">
            <label>Category</label>
            <select
                onChange={handleChange}
                value={category}
                name="category"
                className="border rounded-md px-4 py-2 mb-4"
            >
                <option value='Uncategorized'>Uncategorized</option>
                {budgets.map(item => (
                    <option value={item.category}>{item.category}</option>
                ))}
            </select>
            <label>Description</label>
            <input
                type="text"
                onChange={handleChange}
                name="description"
                value={description}
                className="border rounded-md px-4 py-2 mb-4"
            />
            <label>Expense Amount</label>
            <input
                type="number"
                onChange={handleChange}
                value={amount}
                name="amount"
                className="border rounded-md px-4 py-2"
            />
            <button type="submit" className="mt-4 bg-blue-600 hover:bg-blue-800 transition-colors duration-150">Add Expense</button>
        </form>
    )
}

export default ExpenseForm