import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Account from '../screens/Account';
import AddUser from '../screens/AddUser';
import PersonsCRUD from './PersonsCRUD';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator initialRouteName='UsersCRUD'>
      <Tab.Screen
        name='AddUser'
        component={AddUser}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name='user-plus' size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Persons CRUD'
        component={PersonsCRUD}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name='users-cog' size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Account'
        component={Account}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name='user' size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;
