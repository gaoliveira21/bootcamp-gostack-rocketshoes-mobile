import React from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Navbar, CartIconBox, Badge, ItensNumber } from './styles';

import logo from '../../assets/images/Logo.png';

export default function Header() {
  return (
    <Navbar>
      <Image source={logo} />
      <CartIconBox>
        <Icon name="shopping-basket" size={24} color="#FFF" />
        <Badge>
          <ItensNumber>0</ItensNumber>
        </Badge>
      </CartIconBox>
    </Navbar>
  );
}
