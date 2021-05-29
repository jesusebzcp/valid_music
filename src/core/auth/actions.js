import {LOADING, ERROR, SET_USER} from './types';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

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

export const registerUserAction = async (dataUser, dispatch) => {
  const {email, password, firstName, lastName} = dataUser;
  try {
    setLoading(true, dispatch);
    const {user} = await auth().createUserWithEmailAndPassword(email, password);
    await user.updateProfile({
      displayName: `${firstName} ${lastName}`,
    });
    createUserDb(Object.assign(dataUser, {uid: user.uid}), dispatch);
    setLoading(false, dispatch);
  } catch (error) {
    console.log('Error:registerUserAction =>', error);
    setError(true, dispatch);
  }
};
export const createUserDb = async (dataUser, dispatch) => {
  const {password, ...user} = dataUser;
  try {
    await firestore().collection('users').doc(user.uid).set(user);
  } catch (error) {
    console.log('Error:createUserDb =>', error);
    setError(true, dispatch);
  }
};
export const setUser = async (uid, dispatch) => {
  let usersRef = firestore().collection('users').doc(uid);

  try {
    usersRef.onSnapshot(result => {
      if (result.exists) {
        const user = result.data();
        dispatch({type: SET_USER, payload: user});
      } else {
        console.log('Not found user =>');
      }
    });
  } catch (error) {
    console.log('Error:setUser =>', error);
    setError(true, dispatch);
  }
};
export const singOffDispatch = async dispatch => {
  try {
    await auth().signOut();
    dispatch({type: SET_USER, payload: null});
  } catch (error) {
    console.log('error:singOffDispatch =>', error);
    setError(true, dispatch);
  }
};
export const singInDispatch = async (user, dispatch) => {
  const {email, password} = user;
  try {
    setLoading(true, dispatch);
    await auth().signInWithEmailAndPassword(email, password);
    setLoading(false, dispatch);
  } catch (error) {
    console.log('error:singInDispatch =>', error);
    setError(true, dispatch);
  }
};
