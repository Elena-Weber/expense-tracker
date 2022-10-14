import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllExpenses from './screens/All';
import RecentExpenses from './screens/Recent';
import ManageExpenses from './screens/Manage';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function Overview() {
  return <BottomTabs.Navigator>
    <BottomTabs.Screen
      component={RecentExpenses}
      name="Recent Expenses"
    />
    <BottomTabs.Screen
      component={AllExpenses}
      name="All Expenses"
    />
  </BottomTabs.Navigator>
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


