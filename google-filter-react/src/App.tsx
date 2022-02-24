import './App.css';
import Category from './components/Category'
import Primary from './components/Primary';
import Strong from './components/Strong';
import ExceptSite from './components/ExceptSite';
import SafeSearch from './components/SafeSearch';
import Logo from './components/Logo';
import Range from './components/Range';
import Overlay from './components/Overlay';
import Theme from './components/Theme';
import { onSearch } from './search/search';

/*
import withFirebaseAuth, { WrappedComponentProps } from 'react-with-firebase-auth';
import {
  firebaseAppAuth,
  //firebaseAppDBRef,
  providers
} from './configs/firebase';
*/

console.log('App');
document.addEventListener('keypress', (e) => {
  if (e.code === 'Enter') {
    console.log('Enter');
    onSearch();
  }
});

//function App(props: object & WrappedComponentProps): JSX.Element {
function App(): JSX.Element {
  return (
    <div
      className="App"
    >
      <Overlay />
      <Logo />
      <Category />
      <Primary />
      <Strong />
      <ExceptSite />
      <SafeSearch />
      <Range />
      <button
        onClick={(e) => {
          e.preventDefault();
          onSearch();
        }}
      >
        검색하기
      </button>
      <Theme />
    </div>
  );
}

export default App;

/*
export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(App);
*/
