import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../theme';
import {IconSearch} from '../../assets/svg';
import {useNavigation} from '@react-navigation/native';

const ButtonSearch = ({pHolder = ''}) => {
  const navigation = useNavigation();

  const styles = StyleSheet.create({
    container: {
      marginHorizontal: 20,
      backgroundColor: Colors.textInputBg,
      height: 51,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
      borderRadius: 6,
    },
  });
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Search')}>
      <Text
        style={[Fonts.style.regular(Colors.gray, Fonts.size.input, 'left')]}>
        {pHolder}
      </Text>
      <IconSearch />
    </TouchableOpacity>
  );
};

export default ButtonSearch;
