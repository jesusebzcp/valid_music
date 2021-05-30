import React, {useContext, memo, useMemo, useState} from 'react';
import {
  Text,
  FlatList,
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import RenderTracks from './RenderTracks';
import {Colors, Fonts} from '../../theme';
import {StoreContext} from '../../core';
import {getTracksDispatch} from '../../core/music/actions';

const Tracks = () => {
  const {state, musicDispatch} = useContext(StoreContext);
  const {musicState} = state;
  const {tracks = []} = musicState;

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const styles = StyleSheet.create({
    container: {
      marginHorizontal: 20,
      marginTop: 20,
    },
    title: {
      marginVertical: 10,
    },
    footer: {
      height: 200,
    },
  });

  const handlePagination = () => {
    setPage(page + 1);
  };
  const renderFooter = () => {
    if (!loading) {
      return null;
    }

    return (
      <View style={styles.footer}>
        <ActivityIndicator animating size="small" color={Colors.primary} />
      </View>
    );
  };

  useMemo(async () => {
    setLoading(true);
    await getTracksDispatch(page, musicDispatch);
    setLoading(false);
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
        initialNumToRender={10}
        showsVerticalScrollIndicator={false}
        scrollEnabled
        data={tracks}
        onEndReached={() => handlePagination()}
        onEndReachedThreshold={1}
        ListFooterComponent={() => renderFooter()}
        keyExtractor={(item, index) => String(index)}
        decelerationRate={'normal'}
        renderItem={({item}) => {
          return <RenderTracks item={item} />;
        }}
      />
    </View>
  );
};

export default memo(Tracks);
