import React from 'react';
import {FlatList} from 'react-native';
import RenderResults from './RenderResults';

const ListResults = ({results = []}) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      scrollEnabled
      data={results}
      keyExtractor={(item, index) => String(index)}
      renderItem={({item}) => {
        return <RenderResults item={item} />;
      }}
    />
  );
};

export default ListResults;
