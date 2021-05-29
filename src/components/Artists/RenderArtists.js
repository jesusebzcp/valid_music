import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Colors, Fonts} from '../../theme';

const RenderArtists = ({item}) => {
  const {image = [], name = ''} = item;
  const imageUrl = Object.values(image[0])[0] ?? '';

  const styles = StyleSheet.create({
    img: {
      width: 40,
      height: 40,
      borderRadius: 20,
    },
    item: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      marginRight: 20,
      maxWidth: 100,
    },
  });

  return (
    <TouchableOpacity style={styles.item}>
      <FastImage
        style={styles.img}
        source={{
          uri: imageUrl,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Text style={[Fonts.style.bold(Colors.dark, Fonts.size.tiny, 'center')]}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default RenderArtists;
