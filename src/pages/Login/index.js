import React, {useState} from 'react';
import {
  ScrollView,
  StatusBar,
  Alert,
  ActivityIndicator,
  useColorScheme,
} from 'react-native';
import PropTypes from 'prop-types';

import logo from '../../assets/Images/logo.jpg';

import {
  Container,
  Button,
  TextButton,
  Logo,
  ContainerInput,
  ContainerSafeArea,
  TextLabel,
  TextLabelBold,
  Input,
} from './styles';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visibleActive, setVisibleActive] = useState(0);

  async function handleNavigate() {
    if (email && password) {
      setVisibleActive(1);

      await new Promise(() => {
        setTimeout(() => {
          setVisibleActive(1);
          return navigation.navigate('TabRoutes', {
            screen: 'Home',
          });
        }, 3000);
      });
    }

    return Alert.alert('Erro:', 'Preencha todos os campos para prosseguir.');
  }

  const colorTheme = useColorScheme();

  return (
    <>
      <StatusBar
        backgroundColor={colorTheme === 'dark' ? '#000' : '#fff'}
        barStyle={colorTheme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <ContainerSafeArea themeColor={colorTheme}>
        <ScrollView>
          <Container themeColor={colorTheme}>
            <Logo source={logo} />

            <ContainerInput>
              <TextLabel>
                Para acessar o app informe seu
                <TextLabelBold themeColor={colorTheme}> email</TextLabelBold>
              </TextLabel>

              <Input
                themeColor={colorTheme}
                onChangeText={(text) => setEmail(text)}
                value={email}
                placeholder="Email"
              />

              <TextLabel type="password">
                Agora digite sua
                <TextLabelBold themeColor={colorTheme}> senha</TextLabelBold>
              </TextLabel>

              <Input
                themeColor={colorTheme}
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
                textContentType="password"
                placeholder="Senha"
              />
            </ContainerInput>
          </Container>
          <ActivityIndicator
            style={{opacity: visibleActive}}
            size={60}
            color="#d73f8c"
          />
        </ScrollView>

        <Button themeColor={colorTheme} onPress={handleNavigate}>
          <TextButton>ACESSAR</TextButton>
        </Button>
      </ContainerSafeArea>
    </>
  );
}

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
