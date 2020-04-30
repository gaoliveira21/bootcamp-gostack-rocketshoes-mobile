import styled from 'styled-components';

export const Navbar = styled.View`
  width: 100%;
  height: 64px;
  background: #141419;
  padding: 0 15px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CartIconBox = styled.View`
  flex-direction: row;
  padding-right: 5px;
`;

export const Badge = styled.View`
  background: #7159c1;
  position: absolute;
  top: -5px;
  right: 0px;
  width: 16px;
  height: 16px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const ItensNumber = styled.Text`
  color: #fff;
  font-size: 10px;
  font-weight: bold;
`;
