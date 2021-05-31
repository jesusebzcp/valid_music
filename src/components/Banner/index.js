import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import WebView from 'react-native-webview';
import {Illustration} from '../../assets/svg';
import {Colors, Fonts, Metrics} from '../../theme';
import Button from '../Button';
import Modal from '../Modal';

const Banner = ({
  customStyles = {},
  title = 'Valid music',
  subTile = 'Música al mejor precio',
  textAction = 'Saber más',
  url = 'https://www.last.fm/',
}) => {
  const [webModal, setWebModal] = useState(false);
  const styles = StyleSheet.create({
    container: {
      ...customStyles,
      height: 150,
      backgroundColor: Colors.secondary,
      marginHorizontal: 20,
      borderRadius: 10,
      flexDirection: 'row',
    },
    col1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    col2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      height: 30,
      width: 120,
      marginTop: 10,
    },
    webview: {height: Metrics.screenHeight - 80},
  });
  return (
    <View style={styles.container}>
      <View style={styles.col1}>
        <Text style={[Fonts.style.bold(Colors.light, Fonts.size.h6, 'center')]}>
          {title}
        </Text>
        <Text
          style={[
            Fonts.style.regular(Colors.light, Fonts.size.medium, 'center'),
          ]}>
          {subTile}
        </Text>
        <Button
          color={Colors.light}
          colorText={Colors.primary}
          text={textAction}
          customStyles={styles.button}
          action={() => setWebModal(true)}
        />
      </View>
      <View style={styles.col2}>
        <Illustration />
      </View>
      <Modal open={webModal} setOpen={setWebModal}>
        <View style={styles.webview}>
          <WebView source={{uri: url}} />
        </View>
      </Modal>
    </View>
  );
};

export default Banner;
