import React from 'react';
import './App.css';
import Category from './components/Category'
import Primary from './components/Primary';
import Strong from './components/Strong';
import ExceptSite from './components/ExceptSite';
import SafeSearch from './components/SafeSearch';
import Logo from './components/Logo';
import Range from './components/Range';
import ThemeChanger from './components/ThemeChanger';
import Overlay from './components/Overlay';

function App() {
  let ovl: Overlay;
  let cat: Category;
  let pri: Primary;
  let str: Strong;
  let ecs: ExceptSite;
  let sfs: SafeSearch;
  let rng: Range;

  const onSearch = (): void => {
    // get primary content
    let finalPrimary: string = '';
    for (const item of pri.getContent()) {
      finalPrimary += `${item} `;
    }
    // get strong content
    let finalStrong: string = '';
    const strContent: string[] = str.getContent();
    for (const item of strContent) {
      finalStrong += `"${item}" `;
    }
    // get except site content
    let finalExcSite: string = '';
    const ecsContent: string[] = ecs.getContent();
    for (const item of ecsContent) {
      finalExcSite += `-site:${item} `;
    }
    // get safe search content
    let finalSafeSearch: string = sfs.getContent();
    // get range content
    let finalRange: string = rng.getContent();
    // get category
    let finalCategory: string = cat.getContent();

    const finalQuery: string = `${finalPrimary}${finalStrong}${finalExcSite}${finalSafeSearch}${finalRange}${finalCategory}`;
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

  return (
    <div className="App" onKeyDown={(e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        onSearch();
      }
    }}>
      <Overlay ref={(overlayComponent) => {ovl = overlayComponent as Overlay}}></Overlay>
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
      <ThemeChanger></ThemeChanger>
    </div>
  );
}

export default App;
