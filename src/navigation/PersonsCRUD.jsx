import { createStackNavigator } from '@react-navigation/stack';
import PersonsCRUDList from '../screens/PersonsCRUDList';
import PersonEdit from '../screens/PersonEdit';

const Stack = createStackNavigator();

const PersonsCRUD = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='PersonsCRUDList'
        component={PersonsCRUDList}
        options={{ title: 'Persons CRUD List' }}
      />
      <Stack.Screen
        name='Person Edit'
        component={PersonEdit}
        options={{
          title: '',
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default PersonsCRUD;
