import { createContext, FC, ReactNode, useState, Dispatch, SetStateAction, useEffect } from "react";

interface BudgetsContextTypes {
    budgets: BudgetTypes[]
    expenses: ExpenseType[]
    setBudgets: Dispatch<SetStateAction<BudgetTypes[]>>
    setExpenses: Dispatch<SetStateAction<ExpenseType[]>>
    totalBudget: number
    totalExpense: number
};

export interface BudgetTypes {
    category: string
    amount: number
}
export interface ExpenseType {
    category: string
    amount: number
    description: string
}
const BudgetsContextState = {
    budgets: [],
    expenses: [],
    setBudgets: () => { },
    setExpenses: () => { },
    totalBudget: 0,
    totalExpense: 0
}

export const BudgetsContext = createContext<BudgetsContextTypes>(BudgetsContextState);

interface BudgetsProviderProps {
    children: ReactNode
}

export const BudgetsProvider: FC<BudgetsProviderProps> = ({ children }) => {
    const [budgets, setBudgets] = useState<BudgetTypes[]>([{ category: 'Electronics', amount: 1000 }])
    const [expenses, setExpenses] = useState<ExpenseType[]>([{ category: 'Electronics', amount: 600, description: 'Mobile' }])
    const [totalBudget, setTotalBudget] = useState<number>(0)
    const [totalExpense, setTotalExpense] = useState<number>(0)
    useEffect(() => {
        const newTotalBudget = budgets.reduce((total, budget) => total + budget.amount, 0);
        const newTotalExpense = expenses.reduce((total, expense) => total + expense.amount, 0);
        setTotalBudget(newTotalBudget);
        setTotalExpense(newTotalExpense);
    }, [budgets,expenses]);
    return (
        <BudgetsContext.Provider value={{ budgets, expenses, setBudgets, setExpenses, totalBudget, totalExpense }}>
            {children}
        </BudgetsContext.Provider>
    )
}