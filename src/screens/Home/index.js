import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../../theme';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Artists from '../../components/Artists';
import Tracks from '../../components/Tracks';
import ButtonSearch from '../../components/ButtonSearch';

const Home = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.background,
    },
    banner: {
      marginTop: 20,
    },
  });
  return (
    <View style={styles.container}>
      <Header />
      <ButtonSearch pHolder={'Buscar artistas'} />
      <Banner customStyles={styles.banner} />
      <Artists title={'Artistas'} />
      <Tracks />
    </View>
  );
};

export default Home;
