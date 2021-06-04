import React from 'react';
import { Component } from 'react';
import OverlayUpper from './OverlayUpper';
import OverlayUnder from './OverlayUnder';

interface OverlayProps {

}

interface OverlayState {
  recentQueries: string[]
}

class Overlay extends Component<OverlayProps, OverlayState> {
  constructor(props: OverlayProps) {
    super(props);
    this.state = {
      recentQueries: []
    };
  }

  public pushRecent(query: string): void {
    const newRecent: string[] = Array.from(this.state.recentQueries);
    if (newRecent.length >= 10) {
      newRecent.pop();
    }
    newRecent.splice(0, 0, query);
    this.setState({
      recentQueries: newRecent
    });
  }

  public render(): JSX.Element {
    return (
      <div className="Overlay">
        <div className="OverlayContent">
          <OverlayUpper></OverlayUpper>
          <div className="NullSpace"></div>
          <OverlayUnder recentQueries={this.state.recentQueries}></OverlayUnder>
        </div>
      </div>
    );
  }
}

export default Overlay;
