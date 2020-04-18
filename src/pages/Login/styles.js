import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const ContainerSafeArea = styled.SafeAreaView`
  flex: 1;
  justify-content: space-between;
  background: ${({themeColor}) => (themeColor === 'dark' ? '#000' : '#fff')};
`;

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${({themeColor}) => (themeColor === 'dark' ? '#000' : '#fff')};
`;

export const ContainerInput = styled.View`
  padding-top: 15px;
  border-top-color: #ccc;
  border-top-width: 1px;
  justify-content: center;
  margin: 5% 10px;
  padding-top: 20px;
`;

export const Button = styled(RectButton)`
  background: ${({themeColor}) =>
    themeColor === 'dark' ? '#a00050' : '#d73f8c'};
  flex-direction: row;
  padding: 19px;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 1px;
`;

export const Logo = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 25px;
  margin: 12px auto;
`;

export const TextLabel = styled.Text`
  color: #999;
  font-size: 20px;
  margin: 20px 0px 5px 5px;
`;
export const TextLabelBold = styled.Text`
  color: ${({themeColor}) => (themeColor === 'dark' ? '#fff' : '#000')};
  font-weight: bold;
`;
export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  color: ${({themeColor}) => (themeColor === 'dark' ? '#fff' : '#333')};
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
  margin: 20px 0px 5px 5px;
`;
