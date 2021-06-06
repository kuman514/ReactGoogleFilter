import React from 'react';
import { Component } from 'react';
import OverlayUpper from './OverlayUpper';
import OverlayUnder from './OverlayUnder';

interface OverlayProps {
  onLogin?: Function,
  onLogout?: Function
}

interface OverlayState {
  recentQueries: string[],
  user?: any
}

class Overlay extends Component<OverlayProps, OverlayState> {
  constructor(props: OverlayProps) {
    super(props);
    this.state = {
      recentQueries: []
    };
  }

  public initializeRecent(...queries: string[]): void {
    this.setState({
      recentQueries: queries
    });
  }

  public pushRecent(query: string): void {
    if (!this.state.user) {
      return;
    }
    
    const newRecent: string[] = Array.from(this.state.recentQueries);
    if (newRecent.length >= 10) {
      newRecent.pop();
    }
    newRecent.splice(0, 0, query);
    this.setState({
      recentQueries: newRecent
    });
  }

  public changeUserState(user: any): void {
    this.setState({
      user: user
    });
  }

  public render(): JSX.Element {
    return (
      <div className="Overlay">
        <div className="OverlayContent">
          <OverlayUpper
            onLogin={this.props.onLogin}
            onLogout={this.props.onLogout}
            user={this.state.user}
          ></OverlayUpper>
          <div className="NullSpace"></div>
          <OverlayUnder
            recentQueries={this.state.recentQueries}
            user={this.state.user}
          ></OverlayUnder>
        </div>
      </div>
    );
  }
}

export default Overlay;
