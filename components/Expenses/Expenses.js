import { View, StyleSheet } from 'react-native';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary'
import { Styles } from '../../constants/styles';

function Expenses({ expenses, expensesPeriod }) {
    return (
        <View style={styles.container}>
            <ExpensesSummary
                periodName={expensesPeriod}
                expenses={expenses}
                />
            <ExpensesList
                expenses={expenses}
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