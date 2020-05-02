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
} from './styles';

function Cart({ dispatch }) {
  const products = [
    {
      id: 1,
      title: 'Tênis de Caminhada Leve Confortável',
      price: 'R$ 179,90',
      image:
        'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
    },
    {
      id: 2,
      title: 'Tênis de Caminhada Leve Confortável',
      price: 'R$ 179,90',
      image:
        'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
    },
  ];

  return (
    <Container>
      <CartContainer>
        <CartList
          data={products}
          keyExtractor={(product) => String(product.id)}
          renderItem={({ item }) => (
            <Item>
              <ItemBody>
                <ProductImage source={{ uri: item.image }} />
                <ItemInfo>
                  <Title>{item.title}</Title>
                  <Price>{item.price}</Price>
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

                  <Amount editable={false} value="1" />
                  <Icon name="add-circle-outline" size={20} color="#7159c1" />
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
      </CartContainer>
    </Container>
  );
}

export default connect()(Cart);
