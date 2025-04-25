import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store/store.ts";
import ExpenseForm from "../ExpenseForm/ExpenseForm.tsx";
import {addExpense} from "../store/expensesSlice.ts";


const ExpenseHeader: React.FC = () => {
    const dispatch : AppDispatch = useDispatch();
    const expenses = useSelector((state: RootState) => state.expenses.expenses)

    const isExpenses = expenses.length > 0;

    const handleAdd = (title: string, amount: number) => {

        dispatch(
            addExpense({
                id: Date.now(),
                title,
                amount
            })
        );
    };
    return (
        <header>
            <h1>Expenses calculator</h1>
            <p>Number of expenses: {expenses.length}</p>
            <p>Total expenses: {isExpenses ? (expenses.reduce((sum, expenses) => sum + expenses.amount, 0)) : '-'} rub</p>
            <p>Min expenses: {isExpenses ? Math.min(...expenses.map(expense => expense.amount)) : '-'} rub</p>
            <p>Max expenses: {isExpenses ? Math.max(...expenses.map(expense => expense.amount)) : '-'} rub</p>
            <ExpenseForm onAdd={handleAdd}/>
        </header>
    );
}

export default ExpenseHeader;