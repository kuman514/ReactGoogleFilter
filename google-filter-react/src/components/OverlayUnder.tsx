import React from 'react';
import { Component } from 'react';

interface OverlayUnderProps {

}

interface OverlayUnderState {
  recentQueries: string[]
}

class OverlayUnder extends Component<OverlayUnderProps, OverlayUnderState> {
  constructor(props: OverlayUnderProps) {
    super(props);
    this.state = {
      recentQueries: [
        'koishi',
        'nitori',
        'john cena'
      ]
    };
  }

  private convertContent(): JSX.Element {
    if (this.state.recentQueries.length === 0) {
      return (
        <div>
          <span>최근 기록이 없습니다. 로그인 후 이용하실 수 있습니다.</span>
        </div>
      );
    }

    const finalContent: JSX.Element[] = [];
    for (const index in this.state.recentQueries) {
      finalContent.push(
        <li key={`recent-${index}`}>
          <a href={`https://www.google.com/search?q=${this.state.recentQueries[index]}`} target="_blank" rel="noreferrer">
            {this.state.recentQueries[index]}
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
