import React from 'react';
import './App.css';
import Primary from './components/Primary';
import Strong from './components/Strong';
import ExceptSite from './components/ExceptSite'

function App() {
  let pri: Primary;
  let str: Strong;
  let ecs: ExceptSite;

  return (
    <div className="App">
      <Primary ref={(primaryComponent) => {pri = primaryComponent as Primary}}></Primary>
      <Strong ref={(strongComponent) => {str = strongComponent as Strong}}></Strong>
      <ExceptSite ref={(exceptSiteComponent) => {ecs = exceptSiteComponent as ExceptSite}}></ExceptSite>
      <button onClick={(e) => {
        e.preventDefault();
        // get primary content
        let finalPrimary: string = '';
        for (const item of pri.getContent()) {
          finalPrimary += `${item} `;
        }
        // get strong content
        let finalStrong: string = '';
        for (const item of str.getContent()) {
          finalStrong += `${item} `;
        }
        // get except site content
        let finalExcSite: string = '';
        for (const item of ecs.getContent()) {
          finalExcSite += `${item} `;
        }
        window.open(`https://www.google.com/search?q=${finalPrimary}${finalStrong}${finalExcSite}`, '_blank');
      }}>검색하기</button>
    </div>
  );
}

export default App;
