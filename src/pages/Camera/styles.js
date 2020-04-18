import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;
export const ButtonCapture = styled(RectButton)`
  flex: 0;
  background-color: #fff;
  border-radius: 30px;
  padding: 30px;
  height: 60px;
  width: 60px;
  margin: 20px;
  align-items: center;
  justify-content: center;
`;

export const ButtonInside = styled.View`
  height: 20px;
  width: 20px;
  padding: 25px;
  border-radius: 25px;
  background: #fff;
  border-color: #999;
  border-width: 1px;
`;

export const Header = styled.View`
  background: #000;
  height: 45px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #000;
  height: 100px;
`;

export const TextCancel = styled.Text`
  color: #444;
  margin-right: 50px;
  margin-left: 50px;
`;

export const ContainerButtonPicture = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;
export const TextPicture = styled.Text`
  color: #444;
  margin-bottom: -15px;
`;
