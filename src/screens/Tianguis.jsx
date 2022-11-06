import { View, Text } from 'react-native';
import ProductCard from '../components/ProductCard';
import { home } from '../styles';

const Tianguis = () => {
  return (
    <View style={home.container}>
      <ProductCard />
    </View>
  );
};

export default Tianguis;
