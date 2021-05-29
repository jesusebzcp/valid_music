import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';

import {Colors, Fonts, Metrics} from '../../theme';

const Track = ({track = null}) => {
  const imageUrl = Object.values(track.image[0])[0] ?? '';

  const styles = StyleSheet.create({
    container: {
      marginHorizontal: 10,
      marginVertical: 20,
    },
    img: {
      width: Metrics.images.medium,
      height: Metrics.images.medium,
    },
  });
  return (
    <View style={styles.container}>
      <FastImage
        style={styles.img}
        source={{
          uri: imageUrl,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Text style={Fonts.style.regular(Colors.dark, Fonts.size.h6, 'left')}>
        Duración: {track.duration}
      </Text>
      <Text style={Fonts.style.regular(Colors.dark, Fonts.size.h6, 'left')}>
        Escuchado: {track.listeners}
      </Text>
    </View>
  );
};

export default Track;
