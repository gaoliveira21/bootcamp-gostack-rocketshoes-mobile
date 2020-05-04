import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

import { Container } from '../../components/Container';

import {
  CartContainer,
  CartList,
  Item,
  ItemBody,
  ProductImage,
  ItemInfo,
  RevemoFromCart,
  Title,
  Price,
  ItemFooter,
  AmountChange,
  Amount,
  SubTotal,
  Total,
  TotalText,
  TotalPrice,
  FinishButton,
  FinishButtonText,
  EmptyCart,
  EmptyCartText,
} from './styles';

function Cart({ dispatch, cart, total, removeFromCart, updateAmountRequest }) {
  function increment({ id, amount }) {
    updateAmountRequest(id, amount + 1);
  }

  function decrement({ id, amount }) {
    updateAmountRequest(id, amount - 1);
  }

  return (
    <Container>
      <CartContainer>
        {cart.length !== 0 ? (
          <>
            <CartList
              data={cart}
              keyExtractor={(product) => String(product.id)}
              renderItem={({ item }) => (
                <Item>
                  <ItemBody>
                    <ProductImage source={{ uri: item.image }} />
                    <ItemInfo>
                      <Title>{item.title}</Title>
                      <Price>{item.formattedPrice}</Price>
                    </ItemInfo>
                    <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                      <RevemoFromCart
                        name="delete-forever"
                        size={24}
                        color="#7159c1"
                      />
                    </TouchableOpacity>
                  </ItemBody>
                  <ItemFooter>
                    <AmountChange>
                      <TouchableOpacity onPress={() => decrement(item)}>
                        <Icon
                          name="remove-circle-outline"
                          size={20}
                          color="#7159c1"
                        />
                      </TouchableOpacity>
                      <Amount editable={false} value={String(item.amount)} />
                      <TouchableOpacity onPress={() => increment(item)}>
                        <Icon
                          name="add-circle-outline"
                          size={20}
                          color="#7159c1"
                        />
                      </TouchableOpacity>
                    </AmountChange>
                    <SubTotal>{item.subTotal}</SubTotal>
                  </ItemFooter>
                </Item>
              )}
            />
            <Total>
              <TotalText>TOTAL</TotalText>
              <TotalPrice>{total}</TotalPrice>
            </Total>

            <FinishButton>
              <FinishButtonText>FINALIZAR PEDIDO</FinishButtonText>
            </FinishButton>
          </>
        ) : (
          <EmptyCart>
            <Icon name="remove-shopping-cart" size={64} color="#ddd" />
            <EmptyCartText>Seu carrinho está vazio.</EmptyCartText>
          </EmptyCart>
        )}
      </CartContainer>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart.map((product) => ({
    ...product,
    subTotal: formatPrice(product.amount * product.price),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
