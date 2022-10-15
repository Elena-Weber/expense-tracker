import { View, Text, StyleSheet } from 'react-native';
import { Styles } from '../../constants/styles';

function ExpensesSummary({expenses, periodName}) {

    const expensesSum = expenses.reduce((sum, expense) => {
        return sum + expense.amount
    }, 0);

    return (
        <View style={styles.container}>
            <Text style={styles.period}>{periodName}</Text>
            <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
        </View>
    )
}

export default ExpensesSummary;

const styles = StyleSheet.create({
    container: {
        padding: 8,
        backgroundColor: Styles.colors.primary,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5
    },
    period: {
        fontSize: 20,
        color: 'white',
        padding: 5,
        fontWeight: 'bold'
    },
    sum: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        padding: 5
    }
})