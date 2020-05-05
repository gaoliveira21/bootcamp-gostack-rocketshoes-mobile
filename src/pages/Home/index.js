import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';

import api from '../../services/api';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

import { Container } from '../../components/Container';

import {
  ProductList,
  Product,
  ProductImage,
  Title,
  Price,
  CartIcon,
  ItensNumber,
  AddButton,
  AddButtonText,
} from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const amount = useSelector((state) =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount || 0;
      return sumAmount;
    }, {})
  );

  useEffect(() => {
    (async function loadProducts() {
      const response = await api.get('/products');

      const data = response.data.map((product) => ({
        ...product,
        formattedPrice: formatPrice(product.price),
      }));

      setProducts(data);
    })();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <Container>
      <ProductList
        data={products}
        horizontal
        keyExtractor={(product) => String(product.id)}
        renderItem={({ item }) => (
          <Product>
            <ProductImage
              source={{
                uri: item.image,
              }}
            />
            <Title>{item.title}</Title>
            <Price>{item.formattedPrice}</Price>
            <AddButton onPress={() => handleAddProduct(item.id)}>
              <CartIcon>
                <Icon name="shopping-basket" size={24} color="#FFF" />
                <ItensNumber>{amount[item.id] || 0}</ItensNumber>
              </CartIcon>
              <AddButtonText>ADICIONAR</AddButtonText>
            </AddButton>
          </Product>
        )}
      />
    </Container>
  );
}
