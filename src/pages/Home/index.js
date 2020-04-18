import React, {useState, useEffect} from 'react';
import {Modal, Alert, Text, StatusBar, useColorScheme} from 'react-native';

import {
  Container,
  ListImage,
  ContainerImage,
  Image,
  TextTitle,
  ContainerTitle,
  ContainerModal,
  ModalView,
  ImageModal,
  ButtonReturn,
} from './styles';
import {imagesAPI} from '../../services/api';

export default function Home() {
  const [images, setImages] = useState([]);
  const [imagesModal, setImagesModal] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    imagesAPI.get('photos').then((response) => {
      setImages(response.data);
    });
  }, []);

  async function refreshList() {
    setLoading(true);
    const response = await imagesAPI.get('photos');
    setImages(response.data);
    setLoading(false);
  }
  const colorTheme = useColorScheme();
  return (
    <>
      <StatusBar
        backgroundColor={colorTheme === 'dark' ? '#000' : '#fff'}
        barStyle={colorTheme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <Container themeColor={colorTheme}>
        <Modal
          animationType="slide"
          transparent
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <ContainerModal>
            <ModalView>
              <ImageModal source={{uri: imagesModal}} />

              <ButtonReturn
                activeOpacity={0.7}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Text>Retornar</Text>
              </ButtonReturn>
            </ModalView>
          </ContainerModal>
        </Modal>
        <ListImage
          onRefresh={refreshList}
          refreshing={loading}
          data={images}
          keyExtractor={(image) => String(image.id)}
          renderItem={({item}) => (
            <ContainerImage
              themeColor={colorTheme}
              onPress={() => {
                setImagesModal(item.url);
                modalVisible ? setModalVisible(false) : setModalVisible(true);
              }}>
              <Image source={{uri: item.thumbnailUrl}} />
              <ContainerTitle>
                <TextTitle>{item.title}</TextTitle>
              </ContainerTitle>
            </ContainerImage>
          )}
        />
      </Container>
    </>
  );
}
