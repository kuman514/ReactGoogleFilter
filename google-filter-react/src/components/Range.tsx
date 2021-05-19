import React from 'react';
import { Component } from 'react';

interface RangeProps {

}

interface RangeState {
  type: number,
  startDate: string,
  endDate: string
}

class Range extends Component<RangeProps, RangeState> {
  constructor(props: RangeProps) {
    super(props);
    this.state = {
      type: 0,
      startDate: Date(),
      endDate: Date()
    }
  }
  
  getContent = (): string => {
    switch (this.state.type) {
      case 0:
        return '';
      case 1:
        return '&tbs=qdr:h';
      case 2:
        return '&tbs=qdr:d';
      case 3:
        return '&tbs=qdr:w';
      case 4:
        return '&tbs=qdr:m';
      case 5:
        return '&tbs=qdr:y';
    }
    return '';
  }

  public render(): JSX.Element {
    return (
      <div className="Range">
        <h2>검색 기간</h2>
        <div className="RangeType" onChange={(e) => {
          this.setState({
            type: Number((e.target as HTMLInputElement).value)
          });
        }}>
          <input type="radio" name="SelectedRange" id="RangeAllDate" value="0"/>
          <label>모든 기간</label>
          <input type="radio" name="SelectedRange" id="RangeHour" value="1"/>
          <label>~1시간</label>
          <input type="radio" name="SelectedRange" id="RangeDay" value="2"/>
          <label>~1일</label>
          <input type="radio" name="SelectedRange" id="RangeWeek" value="3"/>
          <label>~1주</label>
          <input type="radio" name="SelectedRange" id="RangeMonth" value="4"/>
          <label>~1개월</label>
          <input type="radio" name="SelectedRange" id="RangeYear" value="5"/>
          <label>~1년</label>
        </div>
      </div>
    );
  }
}

export default Range;
