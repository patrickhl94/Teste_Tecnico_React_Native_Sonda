import React from 'react';
import {BackHandler, useColorScheme, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import PropTypes from 'prop-types';

import {
  Container,
  Exit,
  Header,
  TextTitle,
  TextExit,
  ContainerExit,
} from './styles';

export default function Mais() {
  Mais.propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func.isRequired,
    }).isRequired,
  };

  const colorTheme = useColorScheme();

  return (
    <>
      <StatusBar
        backgroundColor={colorTheme === 'dark' ? '#000' : '#fff'}
        barStyle={colorTheme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <Container themeColor={colorTheme}>
        <Header>
          <TextTitle>Teste Técnico CTIS</TextTitle>
          <TextTitle>Versão 1.0.0 (Número da build 01)</TextTitle>
        </Header>

        <ContainerExit>
          <Exit onPress={() => BackHandler.exitApp()}>
            <Icon name="log-out" size={25} color="#999" />
            <TextExit>Sair</TextExit>
          </Exit>
        </ContainerExit>
      </Container>
    </>
  );
}
