import React from 'react';
import { Component } from 'react';

interface PrimaryProps {

}

interface PrimaryState {
  content: string;
}

class Primary extends Component<PrimaryProps, PrimaryState> {
  constructor(props: PrimaryProps) {
    super(props);
    this.state = {
      content: ''
    }
  }
  
  getContent = (): string[] => {
    return this.state.content.split(',');
  }

  public render(): JSX.Element {
    return (
      <div>
        <h2>주요 검색어</h2>
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
