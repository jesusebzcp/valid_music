import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Header from '../../components/Header';
import Button from '../../components/Button';
import {Colors, Fonts} from '../../theme';

const Notifications = () => {
  const navigation = useNavigation();
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
        <Text style={[Fonts.style.bold(Colors.dark, Fonts.size.h6, 'center')]}>
          Actualmente no tienes notifications
        </Text>
        <Button
          text={'Volver'}
          customStyles={styles.button}
          action={() => navigation.goBack()}
        />
      </View>
    </View>
  );
};

export default Notifications;
