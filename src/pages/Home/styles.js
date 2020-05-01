import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';

export const ProductList = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
})``;

export const Product = styled.View`
  background: #fff;
  height: 358px;
  width: 220px;
  margin: 0px 10px;
  border-radius: 4px;
  padding: 0 15px;
`;

export const ProductImage = styled.Image`
  background: #ccc;
  width: 200px;
  height: 200px;
  align-self: center;
`;

export const Title = styled.Text`
  width: 100%;
  font-size: 16px;
  color: #333;
`;

export const Price = styled.Text`
  font-weight: bold;
  color: #000;
  font-size: 21px;
  margin-top: auto;
`;

export const AddButtonBox = styled(RectButton)`
  flex-direction: row;
  margin: 10px 0;
  width: 100%;
  border-radius: 4px;
  background: #7159c1;
`;

export const CartIcon = styled.View`
  background: rgba(0, 0, 0, 0.3);
  flex-direction: row;
  width: 30%;
  align-items: center;
  justify-content: space-around;
`;

export const ItensNumber = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const AddButton = styled.View`
  padding: 10px;
  width: 70%;
`;

export const AddButtonText = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 16px;
`;
