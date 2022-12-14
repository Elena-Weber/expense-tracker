import { useContext } from 'react';
import Expenses from '../components/Expenses/Expenses';
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../util/date';

function RecentExpenses() {
    
    const expensesCtx = useContext(ExpensesContext);

    const recents = expensesCtx.expenses.filter((expense) => {

        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);

        return (expense.date >= date7DaysAgo) && (expense.date < today);
    });

    return <Expenses
        expensesPeriod="Last 7 days"
        expenses={recents}
        defaultText='Nothing to display for the last 7 days'
    />
}

export default RecentExpenses;