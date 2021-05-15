import React from 'react';
import './App.css';
import Primary from './components/Primary';
import Strong from './components/Strong';

function App() {
  let pri: Primary;
  let str: Strong;

  return (
    <div className="App">
      <Primary ref={(primaryComponent) => {pri = primaryComponent as Primary}}></Primary>
      <Strong ref={(strongContent) => {str = strongContent as Strong}}></Strong>
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
        window.open(`https://www.google.com/search?q=${finalPrimary}${finalStrong}`, '_blank');
      }}>검색하기</button>
    </div>
  );
}

export default App;
