import { View } from 'react-native';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './expensesSummary';

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        desc: 'Ruby course',
        amount: 11.99,
        date: new Date('2022-10-10')
    },
    {
        id: 'e2',
        desc: 'JavaScript course',
        amount: 10.49,
        date: new Date('2022-10-15')
    },
    {
        id: 'e3',
        desc: 'React course',
        amount: 15.90,
        date: new Date('2022-09-20')
    },
    {
        id: 'e4',
        desc: 'SQL course',
        amount: 5.95,
        date: new Date('2022-09-05')
    },
    {
        id: 'e5',
        desc: 'Rails course',
        amount: 21.00,
        date: new Date('2022-08-12')
    },
]

function Expenses({ expenses, expensesPeriod }) {
    return (
        <View>
            <ExpensesSummary
                periodName={expensesPeriod}
                expenses={DUMMY_EXPENSES}
                />
            <ExpensesList
                expenses={DUMMY_EXPENSES}
            />
        </View>
    )
}

export default Expenses;