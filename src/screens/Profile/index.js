import React, {useContext} from 'react';
import {View, StyleSheet, Alert} from 'react-native';

import Header from '../../components/Header';
import Button from '../../components/Button';
import {StoreContext} from '../../core';
import {singOffDispatch} from '../../core/auth/actions';

const Profile = () => {
  const {authDispatch} = useContext(StoreContext);

  const handleSingOff = () => {
    Alert.alert('Confirmación', '¿Realmente deseas cerrar sesión?', [
      {
        text: 'Si',
        onPress: () => {
          singOffDispatch(authDispatch);
        },
      },
      {
        text: 'No',
      },
    ]);
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      paddingHorizontal: 20,
      marginTop: 20,
    },
  });
  return (
    <View style={styles.container}>
      <Header back={true} />
      <View style={styles.content}>
        <Button
          text={'Cerrar sesión'}
          customStyles={styles.button}
          action={() => handleSingOff()}
        />
      </View>
    </View>
  );
};

export default Profile;
