import { useSelector } from 'react-redux';

import { StoreState } from '../store/StoreState';
import RangeDateSetter from './RangeDateSetter';

function RangeDate(): JSX.Element {
  const isHiddenSelector = (state: StoreState): boolean => {
    return (state.range === '&tbs=cdr:1,');
  };
  const isHidden: boolean = useSelector(isHiddenSelector);

  return (
    <div hidden={isHidden} className="RangeDate">
      <RangeDateSetter
        role="start"
      />
      <label> 부터  </label>
      <RangeDateSetter
        role="end"
      />
      <label> 까지</label>
    </div>
  );
}

export default RangeDate;
