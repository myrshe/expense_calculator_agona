import {Expense as ExpenseType} from "../category/Expense/Expense.ts";

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ExpensesState {
    expenses: ExpenseType[]
}

const initialState : ExpensesState = {
    expenses: [
        {
            id: Date.now(),
            title: "wireless mouse",
            amount: 5999
        }
    ]
};


const expensesSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
        addExpense: (state, action: PayloadAction<ExpenseType>) => {
            state.expenses.push(action.payload);
        },
        deleteExpense: (state, action: PayloadAction<number>) => {
            state.expenses = state.expenses.filter(expense => expense.id !== action.payload);
        },
    },
});

export const { addExpense, deleteExpense } = expensesSlice.actions;
export default expensesSlice.reducer;