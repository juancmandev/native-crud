import { FlatList } from 'react-native';
import ProductCard from '../components/ProductCard';
import useGetAllProducts from '../hooks/useGetAllProducts';
import { productList } from '../styles';

const ProductList = () => {
  const products = useGetAllProducts();

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
