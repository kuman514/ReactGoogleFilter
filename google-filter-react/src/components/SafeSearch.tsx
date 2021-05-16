import React from 'react';
import { Component } from 'react';

interface SafeSearchProps {

}

interface SafeSearchState {
  active: boolean;
}

class SafeSearch extends Component<SafeSearchProps, SafeSearchState> {
  constructor(props: SafeSearchProps) {
    super(props);
    this.state = {
      active: false
    };
  }

  public getContent(): string {
    if (this.state.active) {
      return '&safe=active';
    } else {
      return '';
    }
  }

  render(): JSX.Element {
    return (
      <div>
        <input type="checkbox" name="safesearch" id="safesearch" checked={this.state.active} onChange={(e) => {
          e.preventDefault();
          console.log(e.target.checked);
          this.setState({
            active: e.target.checked
          });
        }}/>
        <label>세이프서치 활성화</label>
      </div>
    );
  }
}

export default SafeSearch;
