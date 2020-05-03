import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';

import { Navbar, CartIconBox, Badge, ItensNumber } from './styles';

import logo from '../../assets/images/Logo.png';

function Header({ navigation, cartSize }) {
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

export default connect((state) => ({ cartSize: state.cart.length }))(Header);
