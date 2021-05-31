import React, {useState} from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import WebView from 'react-native-webview';
import {Colors, Fonts, Metrics} from '../../theme';
import Modal from '../Modal';

const RenderArtists = ({item}) => {
  const [webModal, setWebModal] = useState(false);
  const {image = [], name = '', url} = item;
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
    webview: {height: Metrics.screenHeight - 80},
  });

  return (
    <>
      <TouchableOpacity style={styles.item} onPress={() => setWebModal(true)}>
        <FastImage
          style={styles.img}
          source={{
            uri: imageUrl,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <Text
          style={[Fonts.style.bold(Colors.dark, Fonts.size.tiny, 'center')]}>
          {name}
        </Text>
      </TouchableOpacity>
      <Modal open={webModal} setOpen={setWebModal}>
        <View style={styles.webview}>
          <WebView source={{uri: url}} />
        </View>
      </Modal>
    </>
  );
};

export default RenderArtists;
