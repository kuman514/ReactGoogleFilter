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

import * as Firebase from './components/Firebase';

function App() {
  let ovl: Overlay;
  let cat: Category;
  let pri: Primary;
  let str: Strong;
  let ecs: ExceptSite;
  let sfs: SafeSearch;
  let rng: Range;

  Firebase.firebaseAppAuth.getRedirectResult().then((result) => {
    var user = result.user;
    if (ovl && user) {
      console.log('Login successful');
      ovl.changeUserState(user);
    }
    if (ovl) {
      ovl.loadingComplete();
    }
  }).catch((error) => {
    console.log('Error in getting auth');
  });

  const onSearch = (): void => {
    // get primary content
    let finalPrimary: string = '';
    if (pri) {
      for (const item of pri.getContent()) {
        finalPrimary += `${item} `;
      }
    }
    // get strong content
    let finalStrong: string = '';
    if (str) {
      for (const item of str.getContent()) {
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
    for (const item of ecs.getContent()) {
      finalExcSite += `-site:${item} `;
    }
    // get safe search content
    let finalSafeSearch: string = sfs.getContent();
    // get range content
    let finalRange: string = rng.getContent();
    // get category
    let finalCategory: string = cat.getContent();
    const finalParameters: string = `${finalExcSite}${finalSafeSearch}${finalRange}${finalCategory}`;

    const finalQuery: string = `${finalSearchQuery}${finalParameters}`;
    ovl.pushRecent(finalQuery);
    window.open(`https://www.google.com/search?q=${finalQuery}`, '_blank');
  };

  // Initialize theme based on OS preference
  const userPrefersDark: boolean = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const userPrefersLight : boolean = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  if (userPrefersDark){
    document.documentElement.setAttribute('color-theme', 'dark');
  } else if (userPrefersLight) {
    document.documentElement.setAttribute('color-theme', 'light');
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSearch();
    }
  });

  return (
    <div className="App">
      <Overlay
        ref={(overlayComponent) => {ovl = overlayComponent as Overlay}}
        onLogin={() => {
          console.log('Logging in...');
          Firebase.firebaseAppAuth.signInWithRedirect(Firebase.firebaseAppGoogleLogin);
        }}
        onLogout={() => {
          console.log('Logging out...');
          Firebase.firebaseAppAuth.signOut().then(() => {
            console.log('Logout successful');
            ovl.changeUserState(null);
          }).catch((error) => {
            console.log('Error in logging out');
          });
        }}
      ></Overlay>
      <Logo></Logo>
      <Category ref={(categoryComponent) => {cat = categoryComponent as Category}}></Category>
      <Primary ref={(primaryComponent) => {pri = primaryComponent as Primary}}></Primary>
      <Strong ref={(strongComponent) => {str = strongComponent as Strong}}></Strong>
      <ExceptSite ref={(exceptSiteComponent) => {ecs = exceptSiteComponent as ExceptSite}}></ExceptSite>
      <SafeSearch ref={(safeSearchComponent) => {sfs = safeSearchComponent as SafeSearch}}></SafeSearch>
      <Range ref={(rangeComponent) => {rng = rangeComponent as Range}}></Range>
      <button onClick={(e) => {
        e.preventDefault();
        onSearch();
      }}>검색하기</button>
    </div>
  );
}

export default App;
