import React from 'react';
import { Component } from 'react';

interface OverlayUpperProps {

}

interface OverlayUpperState {
}

class OverlayUpper extends Component<OverlayUpperProps, OverlayUpperState> {
  constructor(props: OverlayUpperProps) {
    super(props);
    this.state = {
    };
  }

  public render(): JSX.Element {
    return (
      <div className="OverlayUpper">
      </div>
    );
  }
}

export default OverlayUpper;
