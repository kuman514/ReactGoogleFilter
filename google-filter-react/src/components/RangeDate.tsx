import RangeDateSetter from './RangeDateSetter';

function RangeDate(): JSX.Element {
  return (
    <div className="RangeDate">
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
