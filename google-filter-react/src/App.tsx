import React from 'react';
import './App.css';
import Primary from './components/Primary';
import Strong from './components/Strong';
import ExceptSite from './components/ExceptSite';
import SafeSearch from './components/SafeSearch'

function App() {
  let pri: Primary;
  let str: Strong;
  let ecs: ExceptSite;
  let sfs: SafeSearch;

  return (
    <div className="App">
      <Primary ref={(primaryComponent) => {pri = primaryComponent as Primary}}></Primary>
      <Strong ref={(strongComponent) => {str = strongComponent as Strong}}></Strong>
      <ExceptSite ref={(exceptSiteComponent) => {ecs = exceptSiteComponent as ExceptSite}}></ExceptSite>
      <SafeSearch ref={(safeSearchComponent) => {sfs = safeSearchComponent as SafeSearch}}></SafeSearch>
      <button onClick={(e) => {
        e.preventDefault();
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
        window.open(`https://www.google.com/search?q=${finalPrimary}${finalStrong}${finalExcSite}${finalSafeSearch}`, '_blank');
      }}>검색하기</button>
    </div>
  );
}

export default App;
