import React, {createContext, useReducer} from 'react';
import globalReducer, {INITIAL_STATE_GLOBAL} from './global/reducer';
import authReducer, {INITIAL_STATE_AUTH} from './auth/reducer';
import musicReducer, {INITIAL_STATE_MUSIC} from './music/reducer';

export const StoreContext = createContext({});

const Store = ({children}) => {
  const [globalState, globalDispatch] = useReducer(
    globalReducer,
    INITIAL_STATE_GLOBAL,
  );
  const [authState, authDispatch] = useReducer(authReducer, INITIAL_STATE_AUTH);
  const [musicState, musicDispatch] = useReducer(
    musicReducer,
    INITIAL_STATE_MUSIC,
  );

  return (
    <StoreContext.Provider
      value={{
        state: {globalState, authState, musicState},
        globalDispatch,
        authDispatch,
        musicDispatch,
      }}>
      {children}
    </StoreContext.Provider>
  );
};
export default Store;
