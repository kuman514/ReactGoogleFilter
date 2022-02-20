import React from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import { StoreState } from '../store/StoreState';
import RangeDate from './RangeDate';

/*
interface RangeProps {

}

interface RangeState {
  type: number,
  startDate: string,
  endDate: string
}
*/

function Range(): JSX.Element {
  const rangedDateSelector = (state: StoreState): boolean => {
    return (state.range === '&tbs=cdr:1,');
  }
  const rangedDate: boolean = useSelector(rangedDateSelector);

  const dispatch = useDispatch();

  return (
    <div className="Range">
      <h2>검색 기간</h2>
      <div className="RangeType" onChange={(e: React.FormEvent<HTMLDivElement>) => {
        if (e.target as HTMLInputElement) {
          dispatch({
            type: 'SETRANGE',
            payload: (e.target as HTMLInputElement).value
          });
        }
      }}>
        <input type="radio" name="SelectedRange" id="RangeAllDate" value="" defaultChecked/>
        <label>모든 기간</label>
        <input type="radio" name="SelectedRange" id="RangeHour" value="&tbs=qdr:h"/>
        <label>~1시간</label>
        <input type="radio" name="SelectedRange" id="RangeDay" value="&tbs=qdr:d"/>
        <label>~1일</label>
        <input type="radio" name="SelectedRange" id="RangeWeek" value="&tbs=qdr:w"/>
        <label>~1주</label>
        <input type="radio" name="SelectedRange" id="RangeMonth" value="&tbs=qdr:m"/>
        <label>~1개월</label>
        <input type="radio" name="SelectedRange" id="RangeYear" value="&tbs=qdr:y"/>
        <label>~1년</label>
        <input type="radio" name="SelectedRange" id="RangeSet" value="&tbs=cdr:1,"/>
        <label>직접 설정</label>
      </div>
      {
        rangedDate ? (
          <RangeDate />
        ) : (
          null
        )
      }
    </div>
  );
}

export default Range;
