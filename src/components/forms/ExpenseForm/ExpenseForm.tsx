import * as React from "react";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addExpense} from "../../store/expensesSlice.ts";
import {AppDispatch} from "../../store/store.ts";
import './ExpenseForm.css'


const ExpenseForm = () => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const dispatch : AppDispatch = useDispatch();


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title || isNaN(Number(amount)) || Number(amount) <= 0) return;

        dispatch(addExpense({id:Date.now(), title:title, amount: Number(amount)}))
        setTitle('')
        setAmount('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label>Amount:</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>
            <button type="submit">Add</button>
        </form>
    );

}

export default ExpenseForm