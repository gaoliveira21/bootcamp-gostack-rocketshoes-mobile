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

  handleAddProduct = (id) => {
    const { addToCartRequest } = this.props;
    addToCartRequest(id);
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;

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
              <AddButton onPress={() => this.handleAddProduct(item.id)}>
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
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

const mapStateToProps = (state) => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount || 0;
    return amount;
  }, {}),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
