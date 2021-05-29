import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useKeyboard} from '../../hooks/useKeyboard';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {Colors, Fonts, Metrics} from '../../theme';

const Register = () => {
  const [keyboardHeight] = useKeyboard();
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
        <Input pHolder={'Nombre'} customStyles={styles.input1} />
        <Input pHolder={'Apellido'} customStyles={styles.input2} />
      </View>
      <View>
        <Input pHolder={'Email'} customStyles={styles.input4} />
        <Input pHolder={'Contraseña'} customStyles={styles.input3} />
      </View>
      <View style={styles.button}>
        <Button text={'Registrarme'} />
      </View>
      <View style={{height: keyboardHeight}} />
    </View>
  );
};

export default Register;
