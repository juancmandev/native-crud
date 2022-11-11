import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import 'react-native-gesture-handler';

const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
