import { FlatList } from 'react-native';
import ProductCard from '../components/ProductCard';
import { productList } from '../styles';

const ProductList = () => {
  const products = [
    {
      image:
        'https://asset.vg247.com/metroid_dread_art.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/metroid_dread_art.jpg',
      name: 'Product A',
      price: '9.99',
      description: 'Amazing product!',
    },
    {
      image:
        'https://asset.vg247.com/metroid_dread_art.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/metroid_dread_art.jpg',
      name: 'Product B',
      price: '9.99',
      description: 'Amazing product!',
    },
  ];

  return (
    <FlatList
      data={products}
      numColumns={1}
      showsVerticalScrollIndicator={false}
      keyExtractor={(product) => String(product.name)}
      renderItem={({ item }) => <ProductCard product={item} />}
      contentContainerStyle={productList.flatListContentContainer}
    />
  );
};

export default ProductList;
