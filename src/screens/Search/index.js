import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import {View, StyleSheet, InteractionManager, Keyboard} from 'react-native';
import {Colors} from '../../theme';
import Head from './Head';
import Input from '../../components/Input';
import {searchArtistsAction} from '../../core/music/actions';
import {StoreContext} from '../../core';
import ListResults from './ListResults';

const Search = () => {
  const {state, musicDispatch} = useContext(StoreContext);
  const {musicState} = state;
  const {list_search = []} = musicState;
  const [value, setValue] = useState('');

  const inputRef = useRef(null);

  const clearInput = () => {
    Keyboard.dismiss();
    setValue('');
  };

  const focusInputWithKeyboard = useCallback(() => {
    InteractionManager.runAfterInteractions(() => {
      inputRef?.current?.focus();
    });
  }, []);

  useEffect(() => {
    searchArtistsAction(value, musicDispatch);
  }, [musicDispatch, value]);

  useEffect(() => {
    focusInputWithKeyboard();
  }, [focusInputWithKeyboard]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.background,
      paddingTop: 20,
    },
    content: {
      marginHorizontal: 20,
      marginTop: 30,
    },
    contentInput: {
      paddingBottom: 20,
    },
  });

  return (
    <View style={styles.container}>
      <Head clearInput={clearInput} />
      <View style={styles.content}>
        <View style={styles.contentInput}>
          <Input
            inputRef={inputRef}
            pHolder={'Escribe el nombre del artista'}
            value={value}
            onChange={text => setValue(text)}
            autoFocus={true}
          />
        </View>

        {list_search && list_search.length > 0 && (
          <ListResults results={list_search} />
        )}
      </View>
    </View>
  );
};

export default Search;
