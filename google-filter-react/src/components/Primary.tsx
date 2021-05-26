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
        </div>
        <input type="text" name="primary" id="primary" placeholder="콤마(,)로 구분하여 여러개 입력 가능." onChange={(e) => {
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
