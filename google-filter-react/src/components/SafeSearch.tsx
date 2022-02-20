import { useDispatch } from 'react-redux';

/*
interface SafeSearchProps {

}

interface SafeSearchState {
  active: boolean
}
*/

function SafeSearch(): JSX.Element {
  const dispatch = useDispatch();

  return (
    <div className="SafeSearch">
      <input type="checkbox" name="safesearch" id="safesearch" onChange={(e) => {
        dispatch({
          type: 'SETSAFESEARCH',
          payload: e.target.checked
        });
      }}/>
      <h2>세이프서치 활성화</h2>
    </div>
  );
}

export default SafeSearch;
