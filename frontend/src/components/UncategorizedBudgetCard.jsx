import React from 'react'
import { Button, Card, ProgressBar, Stack } from 'react-bootstrap'
import { UNCATEGORIZED_BUDGET_ID } from '../contexts/BudgetContext'
import { currencyFormatter } from '../utils'
import BudgetCard from './BudgetCard'
import { useBudgets } from '../contexts/BudgetContext'

const UncategorizedBudgetCard = (props) => {
    const { getBudgetExpenses } = useBudgets()
    const amount = getBudgetExpenses(UNCATEGORIZED_BUDGET_ID).reduce((total, expense) => total + expense.amount, 0)
    if(amount === 0) return null
    return (
        <BudgetCard amount={amount} gray name="Uncategorized" {...props}>
        </BudgetCard>
    )
}
export default UncategorizedBudgetCard
