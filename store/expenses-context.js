import { useReducer, createContext } from 'react';

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        desc: 'Ruby Course',
        amount: 11.99,
        date: new Date('2022-10-25')
    },
    {
        id: 'e2',
        desc: 'JavaScript Course',
        amount: 10.49,
        date: new Date('2022-10-27')
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
        date: new Date('2022-10-29')
    },
    {
        id: 'e8',
        desc: 'Angular Course',
        amount: 13.50,
        date: new Date('2022-09-29')
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

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({desc, amount, date}) => {},
    deleteExpense: (id) => {},
    updateExpense: (id, {desc, amount, date}) => {}
});

function expensesReduceer(state, action) {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{...action.payload, id: id}, ...state]
        case 'DELETE':
            return state.filter((expense) => expense.id !== action.payload);
        case 'UPDATE':
            const indexToUpdate = state.findIndex((expense) => expense.id === action.payload.id);
            const expenseToUpdate = state[indexToUpdate];
            const updatedExpense = {...expenseToUpdate, ...action.payload.data}
            const updatedExpenses = [...state];
            updatedExpenses[indexToUpdate] = updatedExpense;
            return updatedExpenses;
        default:
            return state;
    }
}

function ExpensesContextProvider({children}) {

    const [expensesState, dispatch] = useReducer(expensesReduceer, DUMMY_EXPENSES);

    function addExpense(expenseData) {
        dispatch({type: 'ADD', payload: expenseData});
    }

    function deleteExpense(id) {
        dispatch({type: 'DELETE', payload: id});
    }

    function updateExpense(id, expenseData) {
        dispatch({type: 'UPDATE', payload: {id: id, data: expenseData}});
    }

    const value = {
        expenses:  expensesState,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense
    }
    
    return (
        <ExpensesContext.Provider
            value={value}
        >
            {children}
        </ExpensesContext.Provider>
    )
}

export default ExpensesContextProvider;