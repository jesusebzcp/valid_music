import React from 'react';
import Modal from 'react-native-modal';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

import {Colors} from '../../theme';

export default ({open, children, setOpen}) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.light,
      borderTopEndRadius: 12,
      borderTopStartRadius: 12,
      overflow: 'hidden',
    },
    Modal: {
      margin: 0,
      justifyContent: 'flex-end',
      zIndex: 99,
    },
    musk: {
      backgroundColor: Colors.light,
      height: 5,
      width: 60,
      borderRadius: 4,
      alignSelf: 'center',
      marginBottom: 12,
      zIndex: 1,
    },
  });

  return (
    <>
      <Modal
        onSwipeComplete={() => setOpen(false)}
        swipeDirection={['down']}
        isVisible={open}
        onBackdropPress={() =>
          setOpen ? setOpen(false) : console.log('not close')
        }
        backdropColor={Colors.pinkMask(0.75)}
        style={styles.Modal}
        onBackButtonPress={() => {
          setOpen ? setOpen(false) : console.log('not close');
        }}>
        <TouchableOpacity style={styles.musk} onPress={() => setOpen(false)} />
        <View style={styles.container}>{children}</View>
      </Modal>
    </>
  );
};
