import {
  useSelector,
  useDispatch
} from 'react-redux';

import { StoreState } from '../store/StoreState';

interface RangeDateSetterProps {
  role: string
}

function RangeDateSetter(props: RangeDateSetterProps): JSX.Element {
  const formDate = (date: Date): string => {
    const today: string[] = String(date).split(' ');
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
    return todayForm;
  };

  const startDateSelector = (state: StoreState): Date => {
    return new Date(state.dateRangeStart);
  };
  const startDate: Date = useSelector(startDateSelector);
  const stringifiedStartDate: string = formDate(startDate);

  const endDateSelector = (state: StoreState): Date => {
    return new Date(state.dateRangeEnd);
  };
  const endDate: Date = useSelector(endDateSelector);
  const stringifiedEndDate: string = formDate(endDate);

  const getDefaultValue = (): string => {
    switch (props.role) {
      case 'start':
        return stringifiedStartDate;
      case 'end':
        return stringifiedEndDate;
      default:
        return '';
    }
  };

  const getMinValue = (): string => {
    if (props.role === 'end') {
      return stringifiedStartDate;
    } else {
      return '';
    }
  };

  const getMaxValue = (): string => {
    if (props.role === 'start') {
      return stringifiedEndDate;
    } else {
      return '';
    }
  };

  const dispatch = useDispatch();

  return (
    <input
      type="date"
      name="SelectedRangeDate"
      id={
        (props.role === 'start') ? (
          'StartFrom'
        ) : (
          (props.role === 'end') ? (
            'EndTo'
          ) : (
            ''
          )
        )
      }
      defaultValue={getDefaultValue()}
      min={getMinValue()}
      max={getMaxValue()}
      onChange={(e) => {
        const target: HTMLInputElement = e.target;
        switch (props.role) {
          case 'start':
            dispatch({
              type: 'SETDATERANGESTART',
              payload: new Date(target.value)
            });
            break;
          case 'end':
            dispatch({
              type: 'SETDATERANGEEND',
              payload: new Date(target.value)
            });
            break;
        }
      }}
    />
  );
}

export default RangeDateSetter;
