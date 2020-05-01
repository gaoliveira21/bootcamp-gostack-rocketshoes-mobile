import React from 'react';
import { Image, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Navbar, CartIconBox, Badge, ItensNumber } from './styles';

import logo from '../../assets/images/Logo.png';

export default function Header({ navigation }) {
  return (
    <Navbar>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Home')}>
        <Image source={logo} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Cart')}>
        <CartIconBox>
          <Icon name="shopping-basket" size={24} color="#FFF" />
          <Badge>
            <ItensNumber>0</ItensNumber>
          </Badge>
        </CartIconBox>
      </TouchableWithoutFeedback>
    </Navbar>
  );
}
