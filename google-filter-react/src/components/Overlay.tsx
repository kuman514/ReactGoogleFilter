import React from 'react';
import { Component } from 'react';
import OverlayUpper from './OverlayUpper';
import OverlayUnder from './OverlayUnder';
import * as Firebase from './Firebase';

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

  private refreshRecent(): void {
    if (this.state.user) {
      Firebase.firebaseAppDBRef.ref(`/${this.state.user.uid}`).get().then((snapshot) => {
        if (snapshot.exists()) {
          this.setState({
            recentQueries: snapshot.val()
          });
        }
      });
    } else {
      this.setState({
        recentQueries: []
      });
    }
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

    Firebase.firebaseAppDBRef.ref(`/${this.state.user.uid}`).set(newRecent);
    this.setState({
      recentQueries: newRecent
    });
  }

  public changeUserState(user: any): void {
    this.setState({
      user: user
    });
    this.refreshRecent();
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
