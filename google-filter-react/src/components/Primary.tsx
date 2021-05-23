import React from 'react';
import { Component } from 'react';

interface PrimaryProps {

}

interface PrimaryState {
  content: string
}

class Primary extends Component<PrimaryProps, PrimaryState> {
  constructor(props: PrimaryProps) {
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
      <div className="Primary">
        <div>
          <h2>검색어</h2>
          <label>콤마(,)로 구분 </label>
        </div>
        <input type="text" name="primary" id="primary" onChange={(e) => {
          e.preventDefault();
          this.setState({
            content: e.target.value
          });
        }}/>
      </div>
    );
  }
}

export default Primary;
