import createReducer from '../createReducer';
import {LOADING, ERROR, GET_ARTISTS} from './types';

export const INITIAL_STATE_MUSIC = {
  loading: false,
  error: false,
  artists: [],
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

export default createReducer(INITIAL_STATE_MUSIC, {
  [LOADING]: setLoading,
  [ERROR]: setError,
  [GET_ARTISTS]: getArtists,
});
