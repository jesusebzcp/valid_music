import Config from 'react-native-config';
import clientAxios from '../../config/axiosClient';
import {LOADING, ERROR, GET_ARTISTS, GET_TRACKS} from './types';

const LIMIT = 10;

export const setLoading = (loading, dispatch) => {
  dispatch({
    type: LOADING,
    payload: loading,
  });
};
export const setError = (error, dispatch) => {
  setLoading(false, dispatch);
  dispatch({
    type: ERROR,
    payload: error,
  });
};

export const getArtistsDispatch = async (page = 1, dispatch) => {
  const url = `2.0/?method=geo.gettopartists&country=spain&api_key=${Config.TOKEN}&format=json&limit=${LIMIT}&page=${page}`;
  try {
    setLoading(true, dispatch);
    const {data} = await clientAxios.get(url);
    const artists = data?.topartists?.artist;
    dispatch({
      type: GET_ARTISTS,
      payload: artists,
    });
    setLoading(false, dispatch);
  } catch (error) {
    setLoading(false, dispatch);
    console.log('error:getArtists =>', error);
  }
};

export const getTracksDispatch = async (page = 1, dispatch) => {
  try {
    setLoading(true, dispatch);
    const url = `2.0/?method=geo.gettoptracks&country=spain&api_key=${Config.TOKEN}&format=json&page=${page}&limit=${LIMIT}`;
    const {data} = await clientAxios.get(url);
    const tracks = data?.tracks?.track;

    setLoading(false, dispatch);
    dispatch({type: GET_TRACKS, payload: tracks});
  } catch (error) {
    setLoading(false, dispatch);
    console.log('error:getTracks', error);
  }
};
