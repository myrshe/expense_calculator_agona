import {AppDispatch, RootState} from "../store/store.ts";
import {useDispatch, useSelector} from "react-redux";
import Expense from "../Expense/Expense.tsx";
import {deleteExpense} from "../store/expensesSlice.ts";
import React from "react";
import './SectionList.css'


const SectionList: React.FC = () => {
    const dispatch : AppDispatch = useDispatch();
    const expenses = useSelector((state: RootState) => state.expenses.expenses)


    const handleDelete = (id: number) => {
        dispatch(deleteExpense(id))
    };

    if (expenses.length === 0) {
        return <section className="section-list"><p>Add your first Expense!</p></section>
    }
    return (
        <section className="section-list">
            {expenses.map((expense) => (
                <Expense key={expense.id} expense={expense} onDelete={handleDelete} />
            ))}
        </section>
    );
}


export default SectionList