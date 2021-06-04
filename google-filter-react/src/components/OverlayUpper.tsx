import React from 'react';
import { Component } from 'react';

interface OverlayUpperProps {

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
        <button>로그인</button>
        <button onClick={() => {
          this.setState({
            underfold: !(this.state.underfold)
          });
        }}>최근 검색어</button>
      </div>
    );
  }
}

export default OverlayUpper;
