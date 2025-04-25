import {Expense as ExpenseType} from "./Expense.ts";
import React from "react";


interface ExpenseProps {
    expense: ExpenseType;
    onDelete?: (id: number) => void;
}


const Expense: React.FC<ExpenseProps> = ({expense, onDelete}) => {

    return (
        <div>
            <strong>{expense.title}</strong>
            <small>{expense.amount}₽</small>
            {onDelete && (
                <button onClick={() => onDelete(expense.id)}>удалить</button>
            )}
        </div>
    );

}

export default Expense