import React from 'react';

function ThemeChanger(): JSX.Element {
  return (
    <div className="ThemeChanger">
      <button onClick={() => {
        const curTheme: string | null = document.documentElement.getAttribute('color-theme')
        console.log(curTheme);
        switch (curTheme) {
          case 'dark':
            document.documentElement.setAttribute('color-theme', 'light');
            break;
          case 'light':
            document.documentElement.setAttribute('color-theme', 'dark');
            break;
        }
      }}>
        테마 바꾸기
      </button>
    </div>
  );
}

export default ThemeChanger;
