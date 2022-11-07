import { View, Text, Image } from 'react-native';
import { productCard } from '../styles';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const ProductCard = () => {
  return (
    <View style={productCard.card}>
      <View style={productCard.imageContainer}>
        <Image
          style={productCard.image}
          source={{
            uri:
              'https://asset.vg247.com/metroid_dread_art.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/metroid_dread_art.jpg',
          }}
        />
      </View>
      <View style={productCard.footer}>
        <View style={productCard.description}>
          <Text style={productCard.productTitle}>Product A</Text>
          <Text style={productCard.productPrice}>$9.99</Text>
          <Text>Amazing product!</Text>
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
