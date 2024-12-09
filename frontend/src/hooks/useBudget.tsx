import { useContext } from "react";
import { BudgetsContext } from "../contexts/BudgetContext";

export const useBudgets = () => {
    const context = useContext(BudgetsContext);
    if (!context) {
        throw new Error("useBudgets must be used within a BudgetsProvider");
    }
    return context;
};