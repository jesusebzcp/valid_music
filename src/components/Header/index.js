import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {IconNotification, IconBack} from '../../assets/svg';
import {StoreContext} from '../../core';
import {Colors, Fonts, Metrics} from '../../theme';

const Header = ({back = false}) => {
  const navigation = useNavigation();
  const {state} = useContext(StoreContext);
  const {authState} = state;
  const {user} = authState;

  const handleNavigation = screen => {
    navigation.navigate(screen);
  };

  const handleLeftButton = () => {
    if (back) {
      navigation.goBack();
      return;
    }
    handleNavigation('Notifications');
  };
  const styles = StyleSheet.create({
    container: {
      paddingTop: Metrics.addHeader,
      flexDirection: 'row',
      alignContent: 'center',
      height: Metrics.header + 20,
    },
    col1: {
      flex: 1,
      justifyContent: 'center',
      marginLeft: 5,
    },
    col2: {
      flex: 3,
      alignItems: 'center',
      justifyContent: 'center',
    },
    col3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    user: {
      height: 35,
      width: 35,
      backgroundColor: Colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 17,
    },
  });
  return (
    <>
      <StatusBar
        backgroundColor={Colors.light}
        animated
        barStyle={'dark-content'}
      />
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.col1}
          onPress={() => handleLeftButton()}>
          {back ? <IconBack /> : <IconNotification />}
        </TouchableOpacity>
        <View style={styles.col2}>
          <Text style={[Fonts.style.bold(Colors.dark, Fonts.size.h6, 'left')]}>
            {`${user?.firstName} ${user?.lastName}`}
          </Text>
          <Text
            style={[
              Fonts.style.regular(Colors.secondary, Fonts.size.small, 'left'),
            ]}>
            PREMIUM
          </Text>
        </View>
        <TouchableOpacity
          style={styles.col3}
          onPress={() => handleNavigation('Profile')}>
          <View style={styles.user}>
            <Text
              style={[Fonts.style.bold(Colors.light, Fonts.size.h6, 'left')]}>
              {user?.firstName[0].toUpperCase()}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Header;
