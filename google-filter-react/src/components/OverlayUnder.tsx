import React from 'react';
import { Component } from 'react';

interface OverlayUnderProps {
  recentQueries: string[],
  user?: any
}

interface OverlayUnderState {
}

class OverlayUnder extends Component<OverlayUnderProps, OverlayUnderState> {
  constructor(props: OverlayUnderProps) {
    super(props);
    this.state = {
    };
  }

  private convertContent(): JSX.Element {
    if (this.props.recentQueries.length === 0) {
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
    for (const index in this.props.recentQueries) {
      finalContent.push(
        <li key={`recent-${index}`}>
          <a href={`https://www.google.com/search?q=${this.props.recentQueries[index]}`} target="_blank" rel="noreferrer">
            {this.props.recentQueries[index]}
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
        <div className="OverlayTitle">최근 검색어</div>
        <div className="RecentQueries">
          {this.convertContent()}
        </div>
      </div>
    );
  }
}

export default OverlayUnder;
