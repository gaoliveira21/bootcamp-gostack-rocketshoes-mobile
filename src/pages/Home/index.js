import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Image } from 'react-native';
import api from '../../services/api';

import { Container } from '../../components/Container';

import {
  ProductList,
  Product,
  ProductImage,
  Title,
  Price,
  AddButtonBox,
  CartIcon,
  ItensNumber,
  AddButton,
  AddButtonText,
} from './styles';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    const response = await api.get('/products');

    this.setState({ products: response.data });
  }

  render() {
    const { products } = this.state;

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
              <Price>{item.price}</Price>
              <AddButtonBox>
                <CartIcon>
                  <Icon name="shopping-basket" size={24} color="#FFF" />
                  <ItensNumber>0</ItensNumber>
                </CartIcon>
                <AddButton>
                  <AddButtonText>ADICIONAR</AddButtonText>
                </AddButton>
              </AddButtonBox>
            </Product>
          )}
        />
      </Container>
    );
  }
}
