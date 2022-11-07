import { View, Text } from 'react-native';
import ProductCard from '../components/ProductCard';
import ProductList from '../containers/ProductList';
import { home } from '../styles';

const Tianguis = () => {
  return (
    <View style={home.container}>
      <ProductCard />
      <ProductList />
    </View>
  );
};

export default Tianguis;
