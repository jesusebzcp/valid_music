import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import {Colors, Fonts} from '../../theme';
import {IconPlay, IconUser} from '../../assets/svg';

const RenderTracks = ({item}) => {
  const navigation = useNavigation();
  const {image = [], name = ''} = item;
  const imageUrl = Object.values(image[0])[0] ?? '';

  const handleDetail = () => {
    navigation.navigate('DetailTrack', {track: item});
  };

  const styles = StyleSheet.create({
    img: {
      height: 40,
      width: 40,
      borderRadius: 20,
    },
    item: {
      backgroundColor: Colors.primary,
      marginVertical: 10,
      paddingHorizontal: 10,
      flexDirection: 'row',
      paddingVertical: 5,
      borderRadius: 10,
      height: 60,
      justifyContent: 'space-between',
    },
    col1: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    col2: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    contentInformation: {
      alignItems: 'flex-start',
      paddingLeft: 10,
    },
  });

  return (
    <TouchableOpacity style={styles.item} onPress={() => handleDetail()}>
      <View style={styles.col1}>
        <FastImage
          style={styles.img}
          source={{
            uri: imageUrl,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <View style={styles.contentInformation}>
          <Text
            style={[
              Fonts.style.bold(Colors.light, Fonts.size.medium, 'center'),
            ]}>
            {name}
          </Text>
          <Text
            style={[
              Fonts.style.regular(Colors.light, Fonts.size.tiny, 'center'),
            ]}>
            <IconUser /> {'ARTISTA'}
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.col2}>
        <IconPlay />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default RenderTracks;
