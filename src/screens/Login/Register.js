import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, Alert, Keyboard} from 'react-native';
import {StoreContext} from '../../core';
import {useKeyboard} from '../../hooks/useKeyboard';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {Colors, Fonts, Metrics} from '../../theme';
import {INITIAL_VALUES_REGISTER} from '../../constants/values';
import {registerUserAction} from '../../core/auth/actions';
import util from '../../util';

const Register = ({close = () => {}}) => {
  const {state, authDispatch} = useContext(StoreContext);
  const {authState} = state;
  const {loading} = authState;

  const [values, setValues] = useState(INITIAL_VALUES_REGISTER);
  const [keyboardHeight] = useKeyboard();

  const onChangeText = (name, value) => {
    setValues({...values, [name]: value});
  };

  const handleRegister = async () => {
    Keyboard.dismiss();
    for (const property in values) {
      if (values[property] === '') {
        Alert.alert('Ocurrió un error', 'Todos los campos son obligatorios');
        return;
      }
    }

    const user = Object.assign(values, {
      id: util.create_UUID(),
      create: Date.now(),
    });
    await registerUserAction(user, authDispatch);
    setValues(INITIAL_VALUES_REGISTER);
    close();
  };

  const styles = StyleSheet.create({
    container: {
      paddingTop: 20,
      paddingHorizontal: 10,
    },
    firstInputs: {
      flexDirection: 'row',
      marginVertical: 20,
    },
    input1: {
      flex: 1,
      marginRight: 10,
    },
    input2: {
      flex: 1,
      marginLeft: 10,
    },
    input3: {
      marginBottom: 20,
    },
    input4: {
      marginBottom: 20,
    },
    button: {marginBottom: Metrics.addFooter + 20},
  });
  return (
    <View style={styles.container}>
      <Text
        style={[
          Fonts.style.bold(Colors.dark, Fonts.size.h3, 'left'),
          styles.title,
        ]}>
        Registro
      </Text>
      <Text
        style={[
          Fonts.style.regular(Colors.dark, Fonts.size.medium, 'left'),
          styles.title,
        ]}>
        Completa tus datos para tu registro
      </Text>
      <View style={styles.firstInputs}>
        <Input
          pHolder={'Nombre'}
          customStyles={styles.input1}
          onChange={value => onChangeText('firstName', value)}
          value={values.firstName}
        />
        <Input
          pHolder={'Apellido'}
          customStyles={styles.input2}
          onChange={value => onChangeText('lastName', value)}
          value={values.lastName}
        />
      </View>
      <View>
        <Input
          pHolder={'Email'}
          customStyles={styles.input4}
          onChange={value => onChangeText('email', value)}
          value={values.email}
          textContentType={'emailAddress'}
          keyboardType={'email-address'}
          autoCompleteType={'email'}
        />
        <Input
          pHolder={'Contraseña'}
          customStyles={styles.input3}
          onChange={value =>
            onChangeText('password', value.trim().toLowerCase())
          }
          value={values.password}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.button}>
        <Button
          text={'Registrarme'}
          action={() => handleRegister()}
          loading={loading}
        />
      </View>
      <View style={{height: keyboardHeight}} />
    </View>
  );
};

export default Register;
