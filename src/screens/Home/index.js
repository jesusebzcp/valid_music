import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Artists from '../../components/Artists';

const Home = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    banner: {
      marginTop: 20,
    },
  });
  return (
    <View style={styles.container}>
      <Header />
      <Banner customStyles={styles.banner} />
      <Artists />
    </View>
  );
};

export default Home;
