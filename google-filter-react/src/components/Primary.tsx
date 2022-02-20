import { useDispatch } from 'react-redux';

/*
interface PrimaryProps {

}

interface PrimaryState {
  content: string
}
*/

function Primary(): JSX.Element {
  const dispatch = useDispatch();

  return (
    <div className="Primary">
      <div>
        <h2>검색어</h2>
      </div>
      <input type="text" name="primary" id="primary" placeholder="콤마(,)로 구분하여 여러개 입력 가능." onChange={(e) => {
        e.preventDefault();
        console.log(e.target.value);
        dispatch({
          type: 'SETPRIMARY',
          payload: e.target.value
        });
      }}/>
    </div>
  );
}

export default Primary;
