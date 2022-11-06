import { View, Text } from 'react-native';
import { productCard } from '../styles';

const ProductCard = () => {
  return (
    <View style={productCard.card}>
      <View style={productCard.image}></View>
      <View style={productCard.footer}>
        <View style={productCard.description}></View>
        <View style={productCard.actions}></View>
      </View>
    </View>
  );
};

export default ProductCard;
