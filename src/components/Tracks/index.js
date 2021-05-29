import React, {useContext, useEffect, useState} from 'react';
import {Text, FlatList, View, StyleSheet} from 'react-native';
import RenderTracks from './RenderTracks';
import {Colors, Fonts} from '../../theme';
import {StoreContext} from '../../core';
import {getTracksDispatch} from '../../core/music/actions';

const Tracks = () => {
  const {state, musicDispatch} = useContext(StoreContext);
  const {musicState} = state;
  const {tracks = []} = musicState;

  const [page, setPage] = useState(1);

  const styles = StyleSheet.create({
    container: {
      marginHorizontal: 20,
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
    getTracksDispatch(page, musicDispatch);
  }, [musicDispatch, page]);

  return (
    <View style={styles.container}>
      <Text
        style={[
          Fonts.style.bold(Colors.dark, Fonts.size.medium, 'left'),
          styles.title,
        ]}>
        {'En tendencia'}
      </Text>

      <FlatList
        showsVerticalScrollIndicator={false}
        scrollEnabled
        data={tracks}
        onEndReached={() => handlePagination()}
        onEndReachedThreshold={1}
        keyExtractor={(item, index) => String(index)}
        renderItem={({item}) => {
          return <RenderTracks item={item} />;
        }}
      />
    </View>
  );
};

export default Tracks;
