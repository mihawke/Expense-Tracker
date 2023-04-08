import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import { Button, Stack } from 'react-bootstrap'
import BudgetCard from './components/BudgetCard'
import AddBudgetModal from './components/AddBudgetModal'
import { useBudgets } from './contexts/BudgetContext'
import AddExpenseModal from './components/AddExpenseModal'

function App() {
  const [showAddBudetModal, setShowAddBudgetModal] = useState(false)
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false)
  const [showAddExpenseModalBudgetId, setShowAddExpenseModalBudgetId] = useState(false)
  const { budgets ,getBudgetExpenses } = useBudgets()

  function openAddExpenseModal(budgetId){
    setShowAddExpenseModal(true)
    setShowAddExpenseModalBudgetId(budgetId)
  }
  return (
    <>      <Container className='my-4'>
      <Stack direction='horizontal' gap='2' className='mb-4'>
        <h1 className='me-auto'>Budgets</h1>
        <Button variant='primary' onClick={() => setShowAddBudgetModal(true)}>Add Budget</Button>
        <Button variant='outline-primary' onClick={openAddExpenseModal}>Add Expense</Button>
      </Stack>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill , minmax(300px,1fr))',
        gap: '1rem',
        alignItems: 'flex-start'
      }}>
        {budgets.map(budget => {
          const amount = getBudgetExpenses(budget.id).reduce((total,expense)=> total + expense.amount,0)
          return(
          <BudgetCard 
          name={budget.name} 
          key={budget.id} 
          amount={amount} 
          max={budget.max}
          onAddExpenseClick={()=> openAddExpenseModal(budget.id)}
          ></BudgetCard>
          )
        })}
      </div>
    </Container>
      <AddBudgetModal show={showAddBudetModal} handleClose={() => setShowAddBudgetModal(false)} />
      <AddExpenseModal 
      show={showAddExpenseModal} 
      handleClose={() => setShowAddExpenseModal(false)}
      defaultBudgetId={showAddExpenseModalBudgetId}
      ></AddExpenseModal>
    </>
  )
}

export default App
