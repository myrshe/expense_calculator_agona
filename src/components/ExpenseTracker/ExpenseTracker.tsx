
import SectionStatistic from "../SectionStatistic/SectionStatistic.tsx";
import SectionList from "../SectionList/SectionList.tsx";
import React from "react";
import './ExpenseTracker.css'

const ExpenseTracker: React.FC = () => {

    return (
        <main className="main-expense-tracker">
            <SectionStatistic/>
            <SectionList/>
        </main>
    );
};

export default ExpenseTracker