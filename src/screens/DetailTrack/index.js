import React from 'react';
import {View} from 'react-native';
import Track from './Track';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Artists from '../../components/Artists';

const DetailTrack = ({route}) => {
  const {params} = route;
  const {track} = params;
  return (
    <View>
      <Header back={true} />
      <Banner title={track.name} subTile={track.artist.name} url={track.url} />
      <Track track={track} />
      <Artists title={'Artistas recomendados'} />
    </View>
  );
};

export default DetailTrack;
