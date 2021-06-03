import React from 'react';
import { Component } from 'react';
import OverlayUpper from './OverlayUpper';
import OverlayUnder from './OverlayUnder';

interface OverlayProps {

}

interface OverlayState {
}

class Overlay extends Component<OverlayProps, OverlayState> {
  constructor(props: OverlayProps) {
    super(props);
    this.state = {
    };
  }

  public render(): JSX.Element {
    return (
      <div className="Overlay">
        <div className="OverlayContent">
          <OverlayUpper></OverlayUpper>
          <div className="NullSpace"></div>
          <OverlayUnder></OverlayUnder>
        </div>
      </div>
    );
  }
}

export default Overlay;
