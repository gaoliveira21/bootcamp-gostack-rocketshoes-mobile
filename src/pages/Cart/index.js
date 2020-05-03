import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';

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

function Cart({ dispatch, cart }) {
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
                    <RevemoFromCart
                      name="delete-forever"
                      size={24}
                      color="#7159c1"
                    />
                  </ItemBody>
                  <ItemFooter>
                    <AmountChange>
                      <Icon
                        name="remove-circle-outline"
                        size={20}
                        color="#7159c1"
                      />

                      <Amount editable={false} value={String(item.amount)} />
                      <Icon
                        name="add-circle-outline"
                        size={20}
                        color="#7159c1"
                      />
                    </AmountChange>
                    <SubTotal>{item.price}</SubTotal>
                  </ItemFooter>
                </Item>
              )}
            />
            <Total>
              <TotalText>TOTAL</TotalText>
              <TotalPrice>R$ 1619,10</TotalPrice>
            </Total>

            <FinishButton onPress={() => dispatch({ type: '@cart/ADD' })}>
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
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
