import React from 'react';
import './App.css';

import Category from './components/Category'
import Primary from './components/Primary';
import Strong from './components/Strong';
import ExceptSite from './components/ExceptSite';
import SafeSearch from './components/SafeSearch';
import Logo from './components/Logo';
import Range from './components/Range';
import Overlay from './components/Overlay';

import withFirebaseAuth, { WrappedComponentProps } from 'react-with-firebase-auth';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './configs/FirebaseConfig';

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth: firebase.auth.Auth = firebaseApp.auth();
const firebaseAppDBRef: firebase.database.Database = firebase.database();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

// Initialize theme based on OS preference
const userPrefersDark: boolean = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const userPrefersLight : boolean = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
if (userPrefersDark){
  document.documentElement.setAttribute('color-theme', 'dark');
} else if (userPrefersLight) {
  document.documentElement.setAttribute('color-theme', 'light');
}

class App extends React.Component<object & WrappedComponentProps> {
  private pri: Primary | null;
  private str: Strong | null;
  private ecs: ExceptSite | null;
  private sfs: SafeSearch | null;
  private rng: Range | null;
  private cat: Category | null;
  private ovl: Overlay | null;

  constructor(props: object & WrappedComponentProps) {
    super(props);
    this.pri = null;
    this.str = null;
    this.ecs = null;
    this.sfs = null;
    this.rng = null;
    this.cat = null;
    this.ovl = null;

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        this.onSearch();
      }
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (this.ovl) {
        this.ovl.initRecent(user);
      }
    });
  }

  onSearch = (): void => {
    // get primary content
    let finalPrimary: string = '';
    if (this.pri) {
      for (const item of this.pri.getContent()) {
        finalPrimary += `${item} `;
      }
    }

    // get strong content
    let finalStrong: string = '';
    if (this.str) {
      for (const item of this.str.getContent()) {
        finalStrong += `"${item}" `;
      }
    }

    // combine search queries
    const finalSearchQuery: string = `${finalPrimary}${finalStrong}`;
    if (finalSearchQuery === '') {
      return;
    }

    // get except site content
    let finalExcSite: string = '';
    if (this.ecs) {
      for (const item of this.ecs.getContent()) {
        finalExcSite += `-site:${item} `;
      }
    }

    // get safe search content
    let finalSafeSearch: string = '';
    if (this.sfs) {
      finalSafeSearch = this.sfs.getContent();
    }

    // get range content
    let finalRange: string = '';
    if (this.rng) {
      finalRange = this.rng.getContent();
    }

    // get category
    let finalCategory: string = '';
    if (this.cat) {
      finalCategory = this.cat.getContent();
    }
    const finalParameters: string = `${finalExcSite}${finalSafeSearch}${finalRange}${finalCategory}`;

    const finalQuery: string = `${finalSearchQuery}${finalParameters}`;
    if (this.ovl) {
      this.ovl.pushRecent(finalQuery);
    }
    window.open(`https://www.google.com/search?q=${finalQuery}`, '_blank');
  };

  public render(): JSX.Element {
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;

    return (
      <div className="App">
        <Overlay
          user={user}
          onLogin={signInWithGoogle}
          onLogout={signOut}
          dbRef={firebaseAppDBRef}
          ref={(overlayComponent) => {this.ovl = overlayComponent as Overlay}}
        />
        <Logo/>
        <Category
          ref={(categoryComponent) => {this.cat = categoryComponent as Category}}
        />
        <Primary
          ref={(primaryComponent) => {this.pri = primaryComponent as Primary}}
        />
        <Strong
          ref={(strongComponent) => {this.str = strongComponent as Strong}}
        />
        <ExceptSite
          ref={(exceptSiteComponent) => {this.ecs = exceptSiteComponent as ExceptSite}}
        />
        <SafeSearch
          ref={(safeSearchComponent) => {this.sfs = safeSearchComponent as SafeSearch}}
        />
        <Range
          ref={(rangeComponent) => {this.rng = rangeComponent as Range}}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            this.onSearch();
          }}
        >
          검색하기
        </button>
      </div>
    );
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(App);
