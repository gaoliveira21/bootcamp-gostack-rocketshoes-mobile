import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

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

class Home extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    const response = await api.get('/products');

    const data = response.data.map((product) => ({
      ...product,
      formattedPrice: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  handleAddProduct = (product) => {
    const { addToCart } = this.props;
    addToCart({ ...product, amount: 1 });
  };

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
              <Price>{item.formattedPrice}</Price>
              <AddButton onPress={() => this.handleAddProduct(item)}>
                <CartIcon>
                  <Icon name="shopping-basket" size={24} color="#FFF" />
                  <ItensNumber>0</ItensNumber>
                </CartIcon>
                <AddButtonText>ADICIONAR</AddButtonText>
              </AddButton>
            </Product>
          )}
        />
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(null, mapDispatchToProps)(Home);
