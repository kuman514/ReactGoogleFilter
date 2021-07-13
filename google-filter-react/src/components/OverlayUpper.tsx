import React from 'react';
import { Component } from 'react';

interface OverlayUpperProps {
  onLogin?: Function,
  onLogout?: Function,
  user?: firebase.default.User | null,
  onThemeChange?: Function
}

interface OverlayUpperState {
  underfold: boolean
}

class OverlayUpper extends Component<OverlayUpperProps, OverlayUpperState> {
  constructor(props: OverlayUpperProps) {
    super(props);
    this.state = {
      underfold: true
    };
  }

  public render(): JSX.Element {
    let underfoldAttr: string = 'unfold';
    if (this.state.underfold) {
      underfoldAttr = 'fold';
    }
    document.documentElement.setAttribute('under-overlay-fold', underfoldAttr);

    return (
      <div className="OverlayUpper">
        <div></div>
        {
          this.props.user
          ? <button onClick={(e) => {
              if (this.props.onLogout) {
                this.props.onLogout(e);
              }
            }}>{this.props.user.displayName} 로그아웃</button>
          : <button onClick={(e) => {
              if (this.props.onLogin) {
                this.props.onLogin(e);
              }
            }}>로그인</button>
        }
        <button onClick={() => {
          this.setState({
            underfold: !(this.state.underfold)
          });
        }}>최근 검색어</button>
        <button className="ThemeChanger" onClick={() => {
          const curTheme: string | null = document.documentElement.getAttribute('color-theme');
          switch (curTheme) {
            case 'dark':
              document.documentElement.setAttribute('color-theme', 'light');
              break;
            case 'light':
              document.documentElement.setAttribute('color-theme', 'dark');
              break;
          }
          if (this.props.onThemeChange) {
            this.props.onThemeChange();
          }
        }}>
          테마 바꾸기
        </button>
      </div>
    );
  }
}

export default OverlayUpper;
