import { useLayoutEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import IconButton from '../components/UI/IconButton';
import { Styles } from '../constants/styles';

function ManageExpenses({route, navigation}) { //provided by react navigation

    const editedExpenseId = route.params?.expenseId; // if params exit, find expenseId there

    const isEditable = !!editedExpenseId; // translates to boolean

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditable ? 'Edit' : "Add new"
        })
    }, [navigation, isEditable]);

    function deleteHandler() {

    }

    return (
        <View style={styles.container}>
            {isEditable && (
                <View style={styles.deleteContainer}>
                    <IconButton
                    icon="trash"
                    color={Styles.colors.accent}
                    size={36}
                    onPress={deleteHandler}
                    />
                </View>
            )}
        </View>
    )
}

export default ManageExpenses;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Styles.colors.primaryLight,
        flex: 1,
        padding: 25
    },
    deleteContainer: {
        marginTop: 15,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: Styles.colors.error,
        alignItems: 'center'
    }
})