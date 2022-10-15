import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllExpenses from './screens/All';
import RecentExpenses from './screens/Recent';
import ManageExpenses from './screens/Manage';
import { Styles } from './constants/styles';
import { Ionicons } from '@expo/vector-icons';
import IconButton from './components/UI/IconButton';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function Overview() {
  return (
    <BottomTabs.Navigator
      screenOptions={({navigation}) => ({ // provideed by react navigation
        headerStyle: {backgroundColor: Styles.colors.accent},
        headerTintColor: 'white',
        tabBarStyle: {backgroundColor: Styles.colors.accent},
        tabBarActiveTintColor: 'white',
        headerRight: ({tintColor}) =>
          <IconButton
            icon="add" 
            size={25}
            color={tintColor}
            onPress={() => {
              navigation.navigate('Manage Expenses') // which screen to go to
            }}
          />
      })}
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
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: Styles.colors.accent},
            headerTintColor: 'white'
          }}
        >
          <Stack.Screen
            component={Overview}
            name="Overview"
            options={{headerShown: false}}
          />
          <Stack.Screen
            component={ManageExpenses}
            name="Manage Expenses"
            options={{
              presentation: 'modal'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}


