import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {Colors} from '../../theme';

const Input = ({
  pHolder = '',
  textContentType = 'none',
  keyboardType = 'default',
  autoCompleteType = 'off',
  secureTextEntry = false,
  customStyles = {},
}) => {
  const styles = StyleSheet.create({
    input: {
      ...customStyles,
      color: Colors.dark,
      backgroundColor: Colors.textInputBg,
      paddingHorizontal: 10,
      borderRadius: 10,
      height: 51,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
  });
  return (
    <TextInput
      style={styles.input}
      placeholder={pHolder}
      placeholderTextColor={Colors.gray}
      textContentType={textContentType}
      keyboardType={keyboardType}
      autoCompleteType={autoCompleteType}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default Input;
