import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RectButton } from 'react-native-gesture-handler';

export const CartContainer = styled.View`
  height: auto;
  background: #fff;
  width: 100%;
  border-radius: 4px;
  padding: 15px;
  flex-wrap: wrap;
`;

export const CartList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Item = styled.View`
  flex-direction: column;
  padding: 10px 0;
  margin-bottom: 5px;
`;

export const ItemBody = styled.View`
  flex-direction: row;
`;

export const ProductImage = styled.Image`
  width: 90px;
  height: 90px;
`;

export const ItemInfo = styled.View`
  flex-direction: column;
  width: 180px;
  padding: 5px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #999;
`;

export const Price = styled.Text`
  font-size: #191920;
  font-weight: bold;
  font-size: 18px;
  margin-top: auto;
`;

export const RevemoFromCart = styled(Icon)`
  align-self: center;
`;

export const ItemFooter = styled.View`
  flex-direction: row;
  width: auto;
  height: 45px;
  justify-content: space-between;
  align-items: center;
  background-color: #eee;
  border-radius: 4px;
  padding: 0 10px;
`;

export const AmountChange = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Amount = styled.TextInput`
  background: #fff;
  padding: 0 10px;
  font-size: 12px;
  color: #333;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 0 4px;
`;

export const SubTotal = styled.Text`
  font-size: #191920;
  font-weight: bold;
  font-size: 18px;
`;

export const Total = styled.View`
  align-self: center;
`;

export const TotalText = styled.Text`
  font-size: 18px;
  color: #999;
  text-align: center;
`;

export const TotalPrice = styled.Text`
  font-size: 24px;
  color: #141420;
  font-weight: bold;
  text-align: center;
`;

export const FinishButton = styled(RectButton)`
  width: 100%;
  background: #7159c1;
  padding: 10px 20px;
  border-radius: 4px;
  margin-top: 20px;
`;
export const FinishButtonText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;
