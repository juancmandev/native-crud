import { View, Text, Image } from 'react-native';
import { productCard } from '../styles';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const ProductCard = ({ product }) => {
  const { image, name, price, description } = product;

  return (
    <View style={productCard.card}>
      <View style={productCard.imageContainer}>
        <Image
          style={productCard.image}
          source={{
            uri: image,
          }}
        />
      </View>
      <View style={productCard.footer}>
        <View style={productCard.description}>
          <Text style={productCard.productTitle}>{name}</Text>
          <Text style={productCard.productPrice}>${price}</Text>
          <Text>{description}</Text>
        </View>
        <View style={productCard.actions}>
          <MaterialIcons name='favorite-outline' size={28} color='black' />
          <Entypo name='shopping-cart' size={24} color='black' />
        </View>
      </View>
    </View>
  );
};

export default ProductCard;
