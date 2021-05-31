import React, {useState, useContext} from 'react';
import {StyleSheet, View, Text, StatusBar, Keyboard, Alert} from 'react-native';
import {Colors, Fonts, Metrics} from '../../theme';
import Register from './Register';
import {Logo} from '../../assets/svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import {INITIAL_VALUES_LOGIN} from '../../constants/values';
import {StoreContext} from '../../core';
import {singInDispatch} from '../../core/auth/actions';

const BORDER_RADIUS = 20;
const Login = () => {
  const {state, authDispatch} = useContext(StoreContext);
  const {authState} = state;
  const {loading} = authState;

  const [registerModal, setRegisterModal] = useState(false);
  const [values, setValues] = useState(INITIAL_VALUES_LOGIN);

  const onChangeText = (name, value) => {
    setValues({...values, [name]: value});
  };

  const handleLogin = async () => {
    Keyboard.dismiss();
    for (const property in values) {
      if (values[property] === '') {
        Alert.alert('Ocurrió un error', 'Todos los campos son obligatorios');
        return;
      }
    }

    await singInDispatch(values, authDispatch);
    setValues(INITIAL_VALUES_LOGIN);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.background,
    },
    col1: {
      flex: 1,
      backgroundColor: Colors.primary,
      borderBottomStartRadius: BORDER_RADIUS,
      borderBottomEndRadius: BORDER_RADIUS,
      paddingTop: Metrics.addHeader,
      alignItems: 'center',
      justifyContent: 'center',
    },
    col2: {
      flex: 3,
      marginHorizontal: 10,
      marginTop: 10,
    },
    title: {
      marginTop: 10,
    },
    form: {
      marginTop: 40,
    },
    spacing: {
      marginBottom: 25,
    },
    underline: {textDecorationLine: 'underline'},
    footerBottom: {
      marginTop: 20,
    },
  });
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.primary} barStyle={'light-content'} />
      <View style={styles.col1}>
        <Logo />
        <Text
          style={Fonts.style.regular(Colors.light, Fonts.size.h6, 'center')}>
          Bienvenido
        </Text>
      </View>
      <View style={styles.col2}>
        <Text
          style={[
            Fonts.style.bold(Colors.dark, Fonts.size.h3, 'left'),
            styles.title,
          ]}>
          Iniciar sesión
        </Text>
        <View style={styles.form}>
          <Input
            pHolder={'Correo electrónico *'}
            textContentType={'emailAddress'}
            keyboardType={'email-address'}
            autoCompleteType={'email'}
            customStyles={styles.spacing}
            value={values.email}
            onChange={value => onChangeText('email', value.trim())}
          />
          <Input
            pHolder={'Contraseña *'}
            secureTextEntry={true}
            customStyles={styles.spacing}
            onChange={value => onChangeText('password', value.trim())}
            value={values.password}
          />

          <View>
            <Button
              text={'Continuar'}
              action={() => handleLogin()}
              loading={loading}
            />
            <Button
              text={'Registrarte'}
              color={'transparent'}
              textCustomStyles={styles.underline}
              customStyles={styles.footerBottom}
              action={() => setRegisterModal(true)}
            />
          </View>
        </View>
      </View>
      <Modal open={registerModal} setOpen={setRegisterModal}>
        <Register close={() => setRegisterModal(false)} />
      </Modal>
    </View>
  );
};

export default Login;
