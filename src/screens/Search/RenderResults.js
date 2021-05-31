import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import WebView from 'react-native-webview';
import {Colors, Fonts, Metrics} from '../../theme';
import Modal from '../../components/Modal';

const RenderResults = ({item = null}) => {
  const [webModal, setWebModal] = useState(false);

  const styles = StyleSheet.create({
    separator: {
      borderWidth: 1,
      borderColor: Colors.gray,
      opacity: 0.2,
    },
    button: {
      marginVertical: 6,
    },
    webview: {height: Metrics.screenHeight - 80},
  });
  return (
    <>
      <TouchableOpacity style={styles.button} onPress={() => setWebModal(true)}>
        <Text
          style={Fonts.style.regular(Colors.dark, Fonts.size.input, 'left')}>
          {item.name}
        </Text>
        <View style={styles.separator} />
      </TouchableOpacity>
      <Modal open={webModal} setOpen={setWebModal}>
        <View style={styles.webview}>
          <WebView source={{uri: item.url}} />
        </View>
      </Modal>
    </>
  );
};

export default RenderResults;
