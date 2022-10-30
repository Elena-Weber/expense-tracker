import { useContext } from 'react';
import Expenses from '../components/Expenses/Expenses';
import { ExpensesContext } from '../store/expenses-context';

function AllExpenses() {

    const expensesCtx = useContext(ExpensesContext);

    return <Expenses
        expensesPeriod="Total"
        expenses={expensesCtx.expenses}
        defaultText='Nothing to display'
    />
}

export default AllExpenses;