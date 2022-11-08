import { View } from 'react-native';
import ProductList from '../containers/ProductList';
import { home } from '../styles';

const Tianguis = () => {
  return (
    <View style={home.container}>
      <ProductList />
    </View>
  );
};

export default Tianguis;
