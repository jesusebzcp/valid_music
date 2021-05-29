import React, {useCallback, useContext, useEffect} from 'react';
import auth from '@react-native-firebase/auth';

import {setUser} from '../../core/auth/actions';
import {StoreContext} from '../../core';

const Layout = ({children}) => {
  const {authDispatch} = useContext(StoreContext);

  const onAuthStateChanged = useCallback(
    (user = null) => {
      setUser(user?.uid, authDispatch);
    },
    [authDispatch],
  );

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, [onAuthStateChanged]);
  return <>{children}</>;
};

export default Layout;
