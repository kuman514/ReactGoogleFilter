import React from 'react';
import { Component } from 'react';

interface ExceptSiteProps {

}

interface ExceptSiteState {
  content: string
}

class ExceptSite extends Component<ExceptSiteProps, ExceptSiteState> {
  constructor(props: ExceptSiteProps) {
    super(props);
    this.state = {
      content: ''
    }
  }

  getContent = (): string[] => {
    return this.state.content.split(',').map((item) => {
      return item.trim();
    }).filter((item) => item !== '');
  }

  public render(): JSX.Element {
    return (
      <div className="ExceptSite">
        <div>
          <h2>제외할 사이트</h2>
          <label>도메인 네임 형태로 입력 / 콤마(,)로 구분 </label>
        </div>
        <input type="text" name="except-site" id="except-site" onChange={(e) => {
          e.preventDefault();
          this.setState({
            content: e.target.value
          });
        }}/>
      </div>
    );
  }
}

export default ExceptSite;
