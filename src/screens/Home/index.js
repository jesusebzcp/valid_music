import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../../components/Header';

const Home = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

export default Home;
