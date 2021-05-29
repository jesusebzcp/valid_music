import React from 'react';
import {Text} from 'react-native';
import Content from '../../components/Content';
import {Colors, Fonts} from '../../theme';

const Home = () => {
  return (
    <Content>
      <Text style={Fonts.style.bold(Colors.dark, Fonts.size.bigTitle, 'left')}>
        Hello world
      </Text>
    </Content>
  );
};

export default Home;
