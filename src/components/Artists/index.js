import React, {useContext, useEffect, useState} from 'react';
import {Text, FlatList, View, StyleSheet} from 'react-native';
import RenderArtists from './RenderArtists';
import {Colors, Fonts} from '../../theme';
import {StoreContext} from '../../core';
import {getArtistsDispatch} from '../../core/music/actions';

const Artists = () => {
  const {state, musicDispatch} = useContext(StoreContext);
  const {musicState} = state;
  const {artists = []} = musicState;

  const [page, setPage] = useState(1);

  const styles = StyleSheet.create({
    container: {
      marginLeft: 20,
      marginTop: 20,
    },
    title: {
      marginVertical: 10,
    },
  });

  const handlePagination = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    getArtistsDispatch(page, musicDispatch);
  }, [musicDispatch, page]);

  return (
    <View style={styles.container}>
      <Text
        style={[
          Fonts.style.bold(Colors.dark, Fonts.size.medium, 'left'),
          styles.title,
        ]}>
        {'Artistas'}
      </Text>

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        scrollEnabled
        data={artists}
        onEndReached={() => handlePagination()}
        onEndReachedThreshold={1}
        keyExtractor={(item, index) => String(index)}
        renderItem={({item}) => {
          return <RenderArtists item={item} />;
        }}
      />
    </View>
  );
};

export default Artists;
