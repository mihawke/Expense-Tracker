import './App.css'
import BudgetCard from './components/BudgetCard';
import BudgetForm from './components/BudgetForm'
import ExpenseCard from './components/ExpenseCard';
import ExpenseForm from './components/ExpenseForm';
import { useBudgets } from './hooks/useBudget'
import AvailableBudget from './components/AvailableBudget';
import { useState } from 'react';

function App() {
  const { budgets, expenses } = useBudgets()
  const [addBudget, setAddBudget] = useState(false)
  const [addExpense, setAddExpense] = useState(false)

  return (
    <div className="flex flex-1 flex-col relative bg-gray-100">
      {/* Forms */}
      <BudgetForm isVisible={addBudget} setIsVisible={setAddBudget} />
      <ExpenseForm isVisible={addExpense} setIsVisible={setAddExpense} />

      {/* Header */}
      <header className="flex justify-end gap-4 p-6">
        <AvailableBudget />
        <button
          onClick={() => setAddBudget((prev) => !prev)}
          type="button"
          className="ml-auto h-fit px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-150 shadow-md"
        >
          Add Budget
        </button>
        <button
          onClick={() => setAddExpense((prev) => !prev)}
          type="button"
          className="h-fit px-6 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors duration-150 shadow-md"
        >
          Add Expense
        </button>
      </header>

      {/* Main Content */}
      <div className="grid grid-cols-4 gap-10 justify-center items-start p-6">
        {/* Budget Cards */}
        {budgets.map((item, index) => (
          <BudgetCard
            key={index}
            category={item.category}
            amount={item.amount}
          />
        ))}

        {/* Expense Cards */}
        {expenses.map((item, index) => (
          <ExpenseCard
            key={index}
            category={item.category}
            amount={item.amount}
            description={item.description}
          />
        ))}
      </div>
    </div>

  )
}

export default App
