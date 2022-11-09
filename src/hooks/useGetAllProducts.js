import { useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase/index';

const useGetAllProducts = () => {
  const [allProducts, setAllProducts] = useState(undefined);

  const getAllProducts = async () => {
    const products = [];
    const productsRef = collection(db, 'products');
    const productsSnap = await getDocs(productsRef);

    productsSnap.forEach((product) => {
      products.push(product.data());
    });

    setAllProducts(products);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return allProducts;
};

export default useGetAllProducts;
