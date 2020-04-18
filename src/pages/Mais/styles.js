import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: ${({themeColor}) => (themeColor === 'dark' ? '#000' : '#fff')};
`;

export const Header = styled.View`
  padding: 20px;
  border-bottom-width: 0.5px;
  border-bottom-color: #555;
`;
export const Exit = styled(RectButton)`
  padding: 25px;
  flex-direction: row;
  align-items: center;
`;

export const TextTitle = styled.Text`
  color: #888;
`;

export const TextExit = styled.Text`
  color: #888;
  font-size: 20px;
  margin-left: 8px;
`;

export const ContainerExit = styled.View`
  border-bottom-color: #555;
  border-bottom-width: 0.5px;
`;
