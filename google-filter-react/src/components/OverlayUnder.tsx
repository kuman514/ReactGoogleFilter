import React from 'react';
import { Component } from 'react';

interface OverlayUnderProps {
  recentQueries: string[],
  user?: firebase.default.User | null,
  onDelete: Function
}

interface OverlayUnderState {
}

class OverlayUnder extends Component<OverlayUnderProps, OverlayUnderState> {
  constructor(props: OverlayUnderProps) {
    super(props);
    this.state = {
    };
  }

  private convertContent(recents: string[]): JSX.Element {
    if (!this.props.user || recents.length === 0) {
      return (
        <div>
          {
            this.props.user
            ? <span>최근 기록이 없습니다.</span>
            : <span>로그인 후 이용하실 수 있습니다.</span>
          }
        </div>
      );
    }

    const finalContent: JSX.Element[] = [];
    for (const index in recents) {
      finalContent.push(
        <li key={`recent-${index}`}>
          <button onClick={() => {
            this.props.onDelete(index);
          }}>X</button>
          <a href={`https://www.google.com/search?q=${recents[index]}`} target="_blank" rel="noreferrer">
            {recents[index]}
          </a>
        </li>
      );
    }

    return (
      <ul>
        {finalContent}
      </ul>
    );
  }

  public render(): JSX.Element {
    return (
      <div className="OverlayUnder">
        <div className="OverlayTitle">{this.props.user ? `${this.props.user.displayName}의 ` : ''}최근 검색어</div>
        <div className="RecentQueries">
          {this.convertContent(this.props.recentQueries)}
        </div>
      </div>
    );
  }
}

export default OverlayUnder;
