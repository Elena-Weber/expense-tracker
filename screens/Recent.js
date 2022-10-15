import Expenses from '../components/Expenses/Expenses';

function RecentExpenses() {
    return <Expenses
        expensesPeriod="Last 7 days"
    />
}

export default RecentExpenses;