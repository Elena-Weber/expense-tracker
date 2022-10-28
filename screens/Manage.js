import { useLayoutEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '../components/UI/Button';
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

    function cancelHandler() {

    }

    function confirmHandler() {

    }

    return (
        <View style={styles.container}>
            <View style={styles.btnz}>
                <Button
                    mode='flat'
                    style={styles.btn}
                    onPress={cancelHandler}
                >
                    Cancel
                </Button>
                <Button
                    style={styles.btn}
                    onPress={confirmHandler}
                >
                    { isEditable ? 'Update' : 'Add' }
                </Button>
            </View>
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
    btnz: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        minWidth: 120,
        marginHorizontal: 20,
        marginVertical: 20
    },
    deleteContainer: {
        marginTop: 15,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: Styles.colors.error,
        alignItems: 'center'
    }
})