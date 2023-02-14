import { faBuildingColumns, faHome, faSignal } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from './Dashboard';
import Login from './Login';
import MyAccounts from './MyAccounts';
import Reports from './Reports';

const Tab = createBottomTabNavigator();

function MainScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#006C35',
        headerShown: false
      }}
    >
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faHome} color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Account"
        component={MyAccounts}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon
              icon={faBuildingColumns}
              color={color}
              size={size}
            />
          )
        }}
      />
      <Tab.Screen
        name="Reports"
        component={Reports}
        options={{
          tabBarLabel: 'Report',
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faSignal} color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default MainScreen;