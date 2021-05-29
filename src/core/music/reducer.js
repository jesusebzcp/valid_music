import createReducer from '../createReducer';
import {LOADING, ERROR, GET_ARTISTS, GET_TRACKS} from './types';

export const INITIAL_STATE_MUSIC = {
  loading: false,
  error: false,
  artists: [],
  tracks: [],
};

const setLoading = (state, action) => {
  return {
    ...state,
    loading: action.payload,
  };
};

const setError = (state, action) => {
  return {
    ...state,
    error: action.payload,
  };
};
const getArtists = (state, action) => {
  const artist = action.payload;
  return {
    ...state,
    artists: state.artists.concat(artist),
  };
};

const getTracks = (state, action) => {
  const tracks = action.payload;
  return {
    ...state,
    tracks: state.tracks.concat(tracks),
  };
};

export default createReducer(INITIAL_STATE_MUSIC, {
  [LOADING]: setLoading,
  [ERROR]: setError,
  [GET_ARTISTS]: getArtists,
  [GET_TRACKS]: getTracks,
});
