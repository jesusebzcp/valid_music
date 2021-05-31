import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {IconBack, IconClose} from '../../assets/svg';

const Head = ({clearInput}) => {
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 20,
    },
  });
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <IconBack />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => clearInput()}>
        <IconClose />
      </TouchableOpacity>
    </View>
  );
};

export default Head;
