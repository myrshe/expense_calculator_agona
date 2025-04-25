import {AppDispatch, RootState} from "../store/store.ts";
import {useDispatch, useSelector} from "react-redux";
import Expense from "../Expense/Expense.tsx";
import {deleteExpense} from "../store/expensesSlice.ts";
import React from "react";


const ExpenseMain: React.FC = () => {
    const dispatch : AppDispatch = useDispatch();
    const expenses = useSelector((state: RootState) => state.expenses.expenses)


    const handleDelete = (id: number) => {
        dispatch(deleteExpense(id))
    };

    return (
        <main>
            {expenses.map((expense) => (
                <Expense key={expense.id} expense={expense} onDelete={handleDelete} />
            ))}
        </main>
    );
}


export default ExpenseMain