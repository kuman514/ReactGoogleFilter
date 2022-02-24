import {
  useDispatch,
  useSelector
} from 'react-redux';
import withFirebaseAuth, { WrappedComponentProps } from 'react-with-firebase-auth';

import {
  firebaseAppAuth,
  providers,
  sendThemeToDB
} from '../configs/firebase';
import { setTheme } from '../configs/theme';
import { StoreState } from '../store/StoreState';
import LoadingOverlay from './LoadingOverlay';

/*
interface OverlayUpperProps {
  onLogin?: Function,
  onLogout?: Function,
  user?: firebase.default.User | null,
  onThemeChange?: Function
}

interface OverlayUpperState {
  underfold: boolean
}
*/

//function OverlayUpper(): JSX.Element {
function OverlayUpper(props: object & WrappedComponentProps): JSX.Element {
  const {
    user,
    signOut,
    signInWithGoogle,
    loading
  } = props;

  /*
  const userSelector = (state: StoreState): firebase.User | null | undefined => {
    return state.user;
  };
  const user: firebase.User | null | undefined = useSelector(userSelector);
  */

  const foldSelector = (state: StoreState): boolean => {
    return state.recentFold;
  };
  const fold: boolean = useSelector(foldSelector);
  
  const dispatch = useDispatch();

  if (loading) {
    return (
      <LoadingOverlay />
    );
  }

  return (
    <div className="OverlayUpper">
      {
        user ? (
          <button
            onClick={() => {
              signOut();
            }}
          >
            { user.displayName } 로그아웃
          </button>
        ) : (
          <button
            onClick={() => {
              signInWithGoogle();
            }}
          >
            로그인
          </button>
        )
      }
      <button 
        onClick={() => {
          dispatch({
            type: 'OPENORCLOSERECENT',
            payload: !fold
          });
        }}
      >
        최근 검색어
      </button>
      <button
        className="ThemeChanger"
        onClick={() => {
          const curTheme: string | null = document.documentElement.getAttribute('color-theme');
          switch (curTheme) {
            case 'dark':
              setTheme('light');
              dispatch({
                type: 'CHANGETHEME',
                payload: 'light'
              });
              sendThemeToDB('light');
              break;
            case 'light':
              setTheme('dark');
              dispatch({
                type: 'CHANGETHEME',
                payload: 'dark'
              });
              sendThemeToDB('dark');
              break;
          }
        }}
      >
        테마 바꾸기
      </button>
    </div>
  );
}

//export default OverlayUpper;

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(OverlayUpper);
