import React from 'react';
import { Component } from 'react';
import OverlayUpper from './OverlayUpper';
import OverlayUnder from './OverlayUnder';

import firebase from 'firebase/app';
import 'firebase/database';

interface OverlayProps {
  user?: firebase.User | null,
  onLogin?: Function,
  onLogout?: Function,
  dbRef?: firebase.database.Database
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

  public initRecent(user: firebase.User | null): void {
    if (user && this.props.dbRef) {
      this.props.dbRef.ref(`/${user.uid}`).get().then((snapshot) => {
        this.setState({
          recentQueries: snapshot.val()
        });
      });
    } else {
      this.setState({
        recentQueries: []
      });
    }
  }

  public pushRecent(query: string): void {
    if (this.props.user) {
      const newRecent: string[] = Array.from(this.state.recentQueries);
      if (newRecent.length >= 10) {
        newRecent.pop();
      }
      newRecent.splice(0, 0, query);

      if (this.props.dbRef) {
        this.props.dbRef.ref(`/${this.props.user.uid}`).set(newRecent);
      }

      this.setState({
        recentQueries: newRecent
      });
    }
  }

  public render(): JSX.Element {
    return (
      <div className="Overlay">
        <div className="OverlayContent">
          <OverlayUpper
            onLogin={this.props.onLogin}
            onLogout={this.props.onLogout}
            user={this.props.user}
          />
          <div className="NullSpace">
          </div>
          <OverlayUnder
            recentQueries={this.state.recentQueries}
            user={this.props.user}
            onDelete={(index: number) => {
              if (this.props.user) {
                const newRecent: string[] = Array.from(this.state.recentQueries);
                if (newRecent.length <= index) {
                  return;
                }
                newRecent.splice(index, 1);

                if (this.props.dbRef) {
                  this.props.dbRef.ref(`/${this.props.user.uid}`).set(newRecent);
                }
                
                this.setState({
                  recentQueries: newRecent
                });
              }
            }}
          />
        </div>
      </div>
    );
  }
}

export default Overlay;
