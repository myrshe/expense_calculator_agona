import React from "react";
import { useSelector} from "react-redux";
import { RootState} from "../store/store.ts";
import ExpenseForm from "../ExpenseForm/ExpenseForm.tsx";
import './SectionStatistic.css'



const SectionStatistic: React.FC = () => {
    const expenses = useSelector((state: RootState) => state.expenses.expenses)

    const isExpenses = expenses.length > 0;

    const totalExpense = isExpenses ? (expenses.reduce((sum, expense) => sum + expense.amount, 0)) : '-'
    const minExpense = isExpenses ? Math.min(...expenses.map(expense => expense.amount)) : '-'
    const maxExpense = isExpenses ? Math.max(...expenses.map(expense => expense.amount)) : '-'

    return (
        <section className="section-statistic">
            <div className="statistic-container">
                <h1>Expenses calculator</h1>
                <div className="container-sidebar-p">
                    <p className="p-sidebar">Number of expenses: {expenses.length}</p>
                    <p className="p-sidebar">Total expenses: {totalExpense} $</p>
                    <p className="p-sidebar">Min expenses: {minExpense} $</p>
                    <p className="p-sidebar">Max expenses: {maxExpense} $</p>
                </div>
                <ExpenseForm/>
            </div>
        </section>
    );
}

export default SectionStatistic;