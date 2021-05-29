import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {Colors, Metrics} from '../../theme';

const Content = ({
  children,
  background = Colors.background,
  dark = true,
  statusColor = Colors.background,
}) => {
  const mode = dark ? 'dark-content' : 'light-content';

  const styles = StyleSheet.create({
    container: {
      backgroundColor: background,
    },
  });
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={statusColor} barStyle={mode} animated />
      <View>{children}</View>
    </SafeAreaView>
  );
};

export default Content;
