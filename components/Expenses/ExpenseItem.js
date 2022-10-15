import { View, StyleSheet, Pressable, Text } from 'react-native';
import { Styles } from '../../constants/styles';
import { getFormattedDate } from '../../util/date';
import { useNavigation } from '@react-navigation/native';

function ExpenseItem({id, desc, amount, date}) {

    const navi = useNavigation();

    function expensePressHandler() {
        navi.navigate('Manage Expenses', { // which screen to go to
            expenseId: id
        });
    }

    return (
        <Pressable
            onPress={expensePressHandler}
            style={({pressed}) => pressed && styles.pressed} // if pressed, styling is applied
        >
            <View style={styles.item}>
                <View>
                    <Text style={[styles.textBase, styles.desc]}>{desc}</Text>
                    <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={styles.amount}>${amount.toFixed(2)}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default ExpenseItem;

const styles = StyleSheet.create({
    item: {
        backgroundColor: Styles.colors.primaryDark,
        padding: 10,
        margin: 7,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 5,
        elevation: 3,
        shadowColor: 'gray',
        shadowOffset: {width: 1, height: 1},
        ShadowRadius: 4,
        shadowOpacity: 0.5
    },
    textBase: {
        color: Styles.colors.error
    },
    desc: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: 'bold'
    },
    amountContainer: {
        paddingHorizontal: 10,
        paddingVertical: 4,
        backgroundColor: Styles.colors.error,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        minWidth: 70
    },
    amount: {
        color: Styles.colors.primaryDark,
        fontWeight: 'bold'
    },
    pressed: {
        opacity: 0.75
    }
})