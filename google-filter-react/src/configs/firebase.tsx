import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { store } from '../store/Store';

import firebaseConfig from './FirebaseConfig';

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseAppAuth = firebaseApp.auth();
export const firebaseAppDBRef = firebase.database(firebaseApp);
export const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

export function sendRecordsToDB(records: string[]) {
  const user: firebase.User | null | undefined = store.getState().user;
  if (!user) {
    return;
  }

  const newRecent: string[] = Array.from(records);
  if (newRecent.length >= 10) {
    newRecent.pop();
  }

  firebaseAppDBRef.ref(`/recent/${user.uid}`).set(newRecent);

  store.dispatch({
    type: 'CHANGERECORD',
    payload: newRecent
  });
}

export function sendThemeToDB(theme: string) {
  const user: firebase.User | null | undefined = store.getState().user;
  if (!user) {
    return;
  }

  firebaseAppDBRef.ref(`/theme/${user.uid}`).set(theme);
}

firebaseAppAuth.onAuthStateChanged((user) => {
  store.dispatch({
    type: 'SETUSER',
    payload: user
  });

  if (!user) {
    return;
  }

  firebaseAppDBRef.ref(`/theme/${user.uid}`).get().then((snapshot) => {
    if (snapshot.val()) {
      document.documentElement.setAttribute('color-theme', snapshot.val());
    } else {
      const curTheme = document.documentElement.getAttribute('color-theme');
      if (curTheme && firebaseAppDBRef) {
        firebaseAppDBRef.ref(`/theme/${user.uid}`).set(curTheme);
      }
    }
  });

  firebaseAppDBRef.ref(`/recent/${user.uid}`).get().then((snapshot) => {
    if (snapshot.val()) {
      store.dispatch({
        type: 'CHANGERECORD',
        payload: Array.from(snapshot.val())
      });
    } else {
      store.dispatch({
        type: 'CHANGERECORD',
        payload: []
      });
    }
  });
});
