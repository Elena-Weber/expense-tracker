import { View, StyleSheet } from 'react-native';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary'
import { Styles } from '../../constants/styles';

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        desc: 'Ruby Course',
        amount: 11.99,
        date: new Date('2022-10-10')
    },
    {
        id: 'e2',
        desc: 'JavaScript Course',
        amount: 10.49,
        date: new Date('2022-10-15')
    },
    {
        id: 'e3',
        desc: 'React Course',
        amount: 15.90,
        date: new Date('2022-09-20')
    },
    {
        id: 'e4',
        desc: 'SQL Course',
        amount: 5.95,
        date: new Date('2022-09-05')
    },
    {
        id: 'e5',
        desc: 'Rails Course',
        amount: 21.00,
        date: new Date('2022-08-12')
    },
    {
        id: 'e6',
        desc: 'Java Course',
        amount: 12.00,
        date: new Date('2022-10-10')
    },
    {
        id: 'e7',
        desc: 'Python Course',
        amount: 8.99,
        date: new Date('2022-10-15')
    },
    {
        id: 'e8',
        desc: 'Angular Course',
        amount: 13.50,
        date: new Date('2022-09-20')
    },
    {
        id: 'e9',
        desc: 'Git/GitHub Course',
        amount: 25.00,
        date: new Date('2022-09-05')
    },
    {
        id: 'e10',
        desc: 'PHP Course',
        amount: 7.00,
        date: new Date('2022-08-12')
    }
]

function Expenses({ expensesPeriod }) {
    return (
        <View style={styles.container}>
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

const styles = StyleSheet.create({
    container: {
        backgroundColor: Styles.colors.primaryLight,
        flex: 1,
        paddingHorizontal: 25,
        paddingTop: 25,
        paddingBottom: 0
    }
})