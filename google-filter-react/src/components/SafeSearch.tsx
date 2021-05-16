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

  render(): JSX.Element {
    return (<div></div>);
  }
}

export default SafeSearch;
