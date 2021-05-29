import React, {createContext, useReducer} from 'react';
import globalReducer, {INITIAL_STATE_GLOBAL} from './global/reducer';
import authReducer, {INITIAL_STATE_AUTH} from './auth/reducer';

export const StoreContext = createContext({});

const Store = ({children}) => {
  const [globalState, globalDispatch] = useReducer(
    globalReducer,
    INITIAL_STATE_GLOBAL,
  );
  const [authState, authDispatch] = useReducer(authReducer, INITIAL_STATE_AUTH);

  return (
    <StoreContext.Provider
      value={{
        state: {globalState, authState},
        globalDispatch,
        authDispatch,
      }}>
      {children}
    </StoreContext.Provider>
  );
};
export default Store;
