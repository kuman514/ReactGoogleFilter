import React from 'react';
import { Component } from 'react';

interface OverlayUnderProps {

}

interface OverlayUnderState {
}

class OverlayUnder extends Component<OverlayUnderProps, OverlayUnderState> {
  constructor(props: OverlayUnderProps) {
    super(props);
    this.state = {
    };
  }

  public render(): JSX.Element {
    return (
      <div className="OverlayUnder">
      </div>
    );
  }
}

export default OverlayUnder;
