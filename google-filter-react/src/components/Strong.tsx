import React from 'react';
import { Component } from 'react';

interface StrongProps {

}

interface StrongState {
  content: string
}

class Strong extends Component<StrongProps, StrongState> {
  constructor(props: StrongProps) {
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
      <div className="Strong">
        <div>
          <h2>정확히 포함시킬 검색어</h2>
          <label>콤마(,)로 구분 </label>
        </div>
        <input type="text" name="strong" id="strong" onChange={(e) => {
          e.preventDefault();
          this.setState({
            content: e.target.value
          });
        }}/>
      </div>
    );
  }
}

export default Strong;
