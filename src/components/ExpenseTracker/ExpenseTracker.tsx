
import SectionStatistic from "../SectionStatistic/SectionStatistic.tsx";
import SectionList from "../SectionList/SectionList.tsx";
import React from "react";
import './ExpenseTracker.css'

const ExpenseTracker: React.FC = () => {

    return (
        <main className="main-expense-tracker">
            <section className="section-statistic">
                <div className="satistic-cotainer">
                    <SectionStatistic/>
                </div>
            </section>
            <section className="section-list">
                <div className="list-container">
                    <SectionList/>
                </div>
            </section>
        </main>
    );
};

export default ExpenseTracker