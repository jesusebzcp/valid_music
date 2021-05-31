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
  onChange = () => {},
  value = '',
  inputRef = null,
}) => {
  const styles = StyleSheet.create({
    input: {
      ...customStyles,
      color: Colors.dark,
      backgroundColor: Colors.textInputBg,
      paddingHorizontal: 10,
      borderRadius: 6,
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
      ref={inputRef}
      value={value}
      style={styles.input}
      placeholder={pHolder}
      placeholderTextColor={Colors.gray}
      textContentType={textContentType}
      keyboardType={keyboardType}
      autoCompleteType={autoCompleteType}
      secureTextEntry={secureTextEntry}
      onChangeText={t => onChange(t)}
    />
  );
};

export default Input;
