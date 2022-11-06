import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tianguis from '../screens/Tianguis';
import SellProduct from '../screens/SellProduct';
import Account from '../screens/Account';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Ionicons as PersonIcon } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen
        name='Tianguis'
        component={Tianguis}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Entypo name='shopping-cart' size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Sell Product'
        component={SellProduct}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name='add-circle-sharp' size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Account'
        component={Account}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <PersonIcon name='md-person-sharp' size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;
