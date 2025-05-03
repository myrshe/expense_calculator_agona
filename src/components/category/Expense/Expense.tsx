import {Expense as ExpenseType} from "./Expense.ts";
import React from "react";
import "../index.css"


interface ExpenseProps {
    expense: ExpenseType;
    onDelete?: (id: number) => void;
}


const Expense: React.FC<ExpenseProps> = ({expense, onDelete}) => {

    return (
        <div className="item-card">
                <strong>{expense.title}</strong>
            <div>
                    <small>{expense.amount}$</small>
                {onDelete && (
                    <button onClick={() => onDelete(expense.id)}>Delete</button>
                )}
            </div>
        </div>
    );

}

export default Expense