import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Fonts, Colors} from '../../theme';

const Button = ({
  text = '',
  colorText = Colors.primary,
  color = Colors.secondary,
  action = () => {},
  textCustomStyles = {},
  customStyles = {},
}) => {
  const styles = StyleSheet.create({
    text: {...textCustomStyles},
    button: {
      ...customStyles,
      height: 51,
      backgroundColor: color,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  return (
    <TouchableOpacity style={styles.button} onPress={() => action()}>
      <Text
        style={[
          Fonts.style.bold(colorText, Fonts.size.input, 'left'),
          styles.text,
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
