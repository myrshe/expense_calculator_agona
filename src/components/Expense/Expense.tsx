import {Expense as ExpenseType} from "./Expense.ts";
import React from "react";
import "./Expense.css"


interface ExpenseProps {
    expense: ExpenseType;
    onDelete?: (id: number) => void;
}


const Expense: React.FC<ExpenseProps> = ({expense, onDelete}) => {

    return (
        <div className="div-expense">
                <strong>{expense.title}</strong>
            <div className="div-expense-botton">
                    <small>{expense.amount}$</small>
                {onDelete && (
                    <button onClick={() => onDelete(expense.id)}>Удалить</button>
                )}
            </div>
        </div>
    );

}

export default Expense