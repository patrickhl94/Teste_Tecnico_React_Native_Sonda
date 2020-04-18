import React, {useState} from 'react';
import {StatusBar, View, TouchableOpacity} from 'react-native';
import {RNCamera} from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import {
  Container,
  ButtonCapture,
  Header,
  Footer,
  ButtonInside,
  ContainerButtonPicture,
  TextPicture,
  TextCancel,
} from './styles';

export default function Camera({navigation}) {
  Camera.propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
    }).isRequired,
  };

  const [camera, setCamera] = useState({});
  const [type, setType] = useState(RNCamera.Constants.Type.front);
  const [flashMode, setFlashMode] = useState(RNCamera.Constants.FlashMode.off);

  async function handlePicture() {
    if (camera) {
      const options = {
        quality: 0.5,
        base64: true,
        doNotSave: true,
        pauseAfterCapture: true,
      };

      await camera.takePictureAsync(options);
    }
  }

  function handleChangeType() {
    type === RNCamera.Constants.Type.front
      ? setType(RNCamera.Constants.Type.back)
      : setType(RNCamera.Constants.Type.front);
  }

  function handleChangeFlash() {
    type === RNCamera.Constants.FlashMode.off
      ? setFlashMode(RNCamera.Constants.FlashMode.torch)
      : setFlashMode(RNCamera.Constants.FlashMode.off);
  }

  return (
    <>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <Container>
        <Header>
          <TouchableOpacity onPress={handleChangeFlash}>
            <Icon color="#fff" name="flash-on" size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleChangeType}>
            <Icon color="#fff" name="camera-alt" size={30} />
          </TouchableOpacity>
        </Header>

        <RNCamera
          ref={(ref) => setCamera(ref)}
          style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}
          flashMode={flashMode}
          type={type}
          androidCameraPermissionOptions={{
            title: 'Permissão para usar a câmera',
            message: 'Precisamos de sua permisão para usar sua câmera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permissão para usar gravação de áudio',
            message: 'Precisamos de sua permisão para usar sua câmera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />

        <Footer>
          <ContainerButtonPicture>
            <View>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <TextCancel>Cancelar</TextCancel>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: -15,
              }}>
              <TextPicture>Photo</TextPicture>
              <View>
                <ButtonCapture onPress={handlePicture}>
                  <ButtonInside />
                </ButtonCapture>
              </View>
            </View>
          </ContainerButtonPicture>
        </Footer>
      </Container>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
    </>
  );
}
