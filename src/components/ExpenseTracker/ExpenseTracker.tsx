
import ExpenseHeader from "../ExpenseHeader/ExpenseHeader.tsx";
import ExpenseMain from "../ExpenseMain/ExpenseMain.tsx";
import React from "react";

const ExpenseTracker: React.FC = () => {

    return (
        <>
            <ExpenseHeader></ExpenseHeader>
            <ExpenseMain></ExpenseMain>
        </>
    );
};

export default ExpenseTracker