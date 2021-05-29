import React from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import Content from '../../components/Content';
import {Colors, Metrics} from '../../theme';

const Login = () => {
  const BORDER_RADIUS = 20;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.background,
    },
    col1: {
      flex: 1,
      backgroundColor: Colors.primary,
      borderBottomStartRadius: BORDER_RADIUS,
      borderBottomEndRadius: BORDER_RADIUS,
      paddingTop: Metrics.addHeader,
    },
    col2: {flex: 1},
  });
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.primary} barStyle={'light-content'} />
      <View style={styles.col1}>
        <Text>col1</Text>
      </View>
      <View style={styles.col2}>
        <Text>col2</Text>
      </View>
    </View>
  );
};

export default Login;
