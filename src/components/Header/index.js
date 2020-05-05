import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

import { Navbar, CartIconBox, Badge, ItensNumber } from './styles';

import logo from '../../assets/images/Logo.png';

export default function Header({ navigation }) {
  const cartSize = useSelector((state) => state.cart.length);

  return (
    <Navbar>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image source={logo} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <CartIconBox>
          <Icon name="shopping-basket" size={24} color="#FFF" />
          <Badge>
            <ItensNumber>{cartSize}</ItensNumber>
          </Badge>
        </CartIconBox>
      </TouchableOpacity>
    </Navbar>
  );
}
