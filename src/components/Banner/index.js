import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Illustration} from '../../assets/svg';
import {Colors, Fonts} from '../../theme';
import Button from '../Button';

const Banner = ({customStyles = {}}) => {
  const styles = StyleSheet.create({
    container: {
      ...customStyles,
      height: 150,
      backgroundColor: Colors.secondary,
      marginHorizontal: 10,
      borderRadius: 10,
      flexDirection: 'row',
    },
    col1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    col2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      height: 30,
      width: 120,
      marginTop: 10,
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.col1}>
        <Text style={[Fonts.style.bold(Colors.light, Fonts.size.h6, 'left')]}>
          Valid music
        </Text>
        <Text
          style={[
            Fonts.style.regular(Colors.light, Fonts.size.medium, 'left'),
          ]}>
          Música al mejor precio
        </Text>
        <Button
          color={Colors.light}
          colorText={Colors.primary}
          text={'Saber mas'}
          customStyles={styles.button}
        />
      </View>
      <View style={styles.col2}>
        <Illustration />
      </View>
    </View>
  );
};

export default Banner;
