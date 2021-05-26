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
    const today: string[] = Date().split(' ');
    let month = '';
    switch (today[1]) {
      case 'Jan':
        month = '01';
        break;
      case 'Feb':
        month = '02';
        break;
      case 'Mar':
        month = '03';
        break;
      case 'Apr':
        month = '04';
        break;
      case 'May':
        month = '05';
        break;
      case 'Jun':
        month = '06';
        break;
      case 'Jul':
        month = '07';
        break;
      case 'Aug':
        month = '08';
        break;
      case 'Sep':
        month = '09';
        break;
      case 'Oct':
        month = '10';
        break;
      case 'Nov':
        month = '11';
        break;
      case 'Dec':
        month = '12';
        break;
    }
    const todayForm: string = `${today[3]}-${month}-${today[2]}`;
    this.state = {
      type: 0,
      startDate: todayForm,
      endDate: todayForm
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
          <input type="radio" name="SelectedRange" id="RangeSet" value="6"/>
          <label>직접 설정</label>
        </div>
        <div hidden={this.state.type !== 6} className="RangeDate" onChange={(e) => {
          console.log((e.target as HTMLInputElement).value);
        }}>
          <input type="date" name="SelectedRangeDate" id="StartFrom" />
          <label> 부터  </label>
          <input type="date" name="SelectedRangeDate" id="EndTo" />
          <label> 까지</label>
        </div>
      </div>
    );
  }
}

export default Range;
