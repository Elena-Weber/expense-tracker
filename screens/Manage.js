import { useLayoutEffect } from 'react';
import { Text } from 'react-native';

function ManageExpenses({route, navigation}) { //provided by react navigation

    const editedExpenseId = route.params?.expenseId; // if params exit, find expenseId there

    const isEditable = !!editedExpenseId; // translates to boolean

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditable ? 'Edit' : "Add new"
        })
    }, [navigation, isEditable]);

    return <Text>Manage</Text>
}

export default ManageExpenses;