import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PersonsCRUD from './PersonsCRUD';
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator initialRouteName='UsersCRUD'>
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
    </Tab.Navigator>
  );
};

export default Navigation;
