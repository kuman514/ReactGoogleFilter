import React from 'react';
import { Component } from 'react';

interface OverlayUpperProps {

}

interface OverlayUpperState {
  fold: boolean
}

class OverlayUpper extends Component<OverlayUpperProps, OverlayUpperState> {
  constructor(props: OverlayUpperProps) {
    super(props);
    this.state = {
      fold: false
    };
  }

  public render(): JSX.Element {
    return (
      <div className="OverlayUpper">
        <div></div>
        <button>TestButton</button>
        <button>TestButton</button>
      </div>
    );
  }
}

export default OverlayUpper;
