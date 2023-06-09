import React from 'react'
import { Button, Card, ProgressBar, Stack } from 'react-bootstrap'
import { currencyFormatter } from '../utils'

const BudgetCard = ({ name, amount, max, gray, onAddExpenseClick, hideButtons, onViewExpenseClick }) => {
    const classNames = []
    if (amount > max) {
        classNames.push("bg-danger", "bg-opacity-10")
    }
    else if (gray) {
        classNames.push("bg-light")
    }
    function getProgressbarVariant(amount, max) {
        const ratio = amount / max
        if (ratio < 0.5) { return "primary" }
        if (ratio < 0.75) { return "warning" }
        return "danger"
    }
    return (
        <Card className={classNames.join(' ')}>
            <Card.Body>
                <Card.Title className='d-flex justify-content-between 
            align-items-baseline fw-normal mb-3'>
                    <div className='me-2'>{name}</div>
                    <div className='d-flex align-items-baseline'>{currencyFormatter.format(amount)}
                        {max && <span className='text-muted fs-6'>/ {currencyFormatter.format(max)}</span>}</div>
                </Card.Title>
                {max && <ProgressBar className='rounded-pill' variant={getProgressbarVariant(amount, max)}
                    min={0} max={max} now={amount}></ProgressBar>
                }
                {!hideButtons &&
                    <Stack className='mt-4' direction='horizontal' gap='2'>
                        <Button variant='outline-primary' className='ms-auto' onClick={onAddExpenseClick}>Add Expense</Button>
                        <Button variant='outline-secondary' onClick={onViewExpenseClick}>View Expense</Button>
                    </Stack>
                }
            </Card.Body>
        </Card>
    )
}

export default BudgetCard