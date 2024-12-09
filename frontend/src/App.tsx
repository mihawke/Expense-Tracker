import { useEffect, useState } from 'react';
import './App.css'
import BudgetCard from './components/BudgetCard';
import BudgetForm from './components/BudgetForm'
import ExpenseCard from './components/ExpenseCard';
import ExpenseForm from './components/ExpenseForm';
import { useBudgets } from './hooks/useBudget'

function App() {
  const [remaining, setRemaining] = useState(0)
  const { budgets, expenses, totalBudget, totalExpense } = useBudgets()
  useEffect(() => {
    setRemaining(totalBudget - totalExpense)
  }, [totalBudget, totalExpense])

  return (
    <div className='flex gap-10'>
      <BudgetForm></BudgetForm>
      <ExpenseForm></ExpenseForm>
      {budgets.map(item => (
        <BudgetCard category={item.category} amount={item.amount} />
      ))}
      {expenses.map(item => (
        <ExpenseCard category={item.category} amount={item.amount} description={item.description} />
      ))}
      <div>Remaining Budget: {remaining}</div>
    </div>
  )
}

export default App
