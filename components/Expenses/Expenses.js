import { View, StyleSheet, Text } from 'react-native';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary'
import { Styles } from '../../constants/styles';

function Expenses({ expenses, expensesPeriod, defaultText }) {

    let content = <Text style={styles.default}>{defaultText}</Text>;

    if (expenses.length > 0) {
        content = <ExpensesList expenses={expenses} />
    }

    return (
        <View style={styles.container}>
            <ExpensesSummary
                periodName={expensesPeriod}
                expenses={expenses}
                />
            {content}
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
    },
    default: {
        color: Styles.colors.primaryDark,
        fontSize: 20,
        textAlign: 'center',
        marginTop: 32
    }
})