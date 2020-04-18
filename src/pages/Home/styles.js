import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${({themeColor}) => (themeColor === 'dark' ? '#000' : '#fff')};
`;

export const ListImage = styled.FlatList`
  flex: 1;
`;

export const Image = styled.Image`
  width: 150px;
  height: 150px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`;

export const ContainerImage = styled(RectButton)`
  flex-direction: row;
  padding: 5px;
  margin: 10px;
  border-radius: 20px;
  background: ${({themeColor}) => (themeColor === 'dark' ? '#222' : '#f0f0f0')};
`;

export const TextTitle = styled.Text`
  color: ${({themeColor}) => (themeColor === 'dark' ? '#f0f0f0' : '#333')};
  font-size: 15px;
  text-align: center;
  margin: auto;
`;

export const ContainerTitle = styled.View`
  flex: 1;
  padding: 5px;
  justify-content: center;
`;

export const ContainerModal = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalView = styled.View`
  margin: 20px;
  background: white;
  border-radius: 20px;
  padding: 15px;
  align-items: center;
`;

export const ImageModal = styled.Image`
  height: 320px;
  width: 320px;
`;

export const ButtonReturn = styled.TouchableHighlight`
  background: #f0f0f0;
  padding: 6px;
  margin-top: 10px;
  border-radius: 5px;
`;
