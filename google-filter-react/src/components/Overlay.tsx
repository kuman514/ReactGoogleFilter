import React from 'react';
import { Component } from 'react';

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
      </div>
    );
  }
}

export default Overlay;
