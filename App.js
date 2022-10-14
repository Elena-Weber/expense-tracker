import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllExpenses from './screens/All';
import RecentExpenses from './screens/Recent';
import ManageExpenses from './screens/Manage';
import { Styles } from './constants/styles';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function Overview() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: Styles.colors.primaryDark},
        headerTintColor: 'white',
        tabBarStyle: {backgroundColor: Styles.colors.primaryDark},
        tabBarActiveTintColor: 'white'
      }}
    >
      <BottomTabs.Screen
        component={RecentExpenses}
        name="Recent Expenses" // name in header
        options={{
          // title: "Recent Expenses",
          tabBarLabel: 'Recent', // name in tab bar
          tabBarIcon: ({color, size}) =>
            <Ionicons
              name="hourglass"
              size={size}
              color={color}
            />
        }}
      />
      <BottomTabs.Screen
        component={AllExpenses}
        name="All Expenses"
        options={{
          // title: "All Expenses",
          tabBarLabel: 'All', // name in tab bar
          tabBarIcon: ({color, size}) =>
            <Ionicons
              name="calendar"
              size={size}
              color={color}
            />
        }}
      />
    </BottomTabs.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            component={Overview}
            name="Overview"
            options={{headerShown: false}}
          />
          <Stack.Screen
            component={ManageExpenses}
            name="Manage Expenses"
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}


