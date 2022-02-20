import { useDispatch } from 'react-redux';

/*
interface StrongProps {

}

interface StrongState {
  content: string
}
*/

function Strong(): JSX.Element {
  const dispatch = useDispatch();

  return (
    <div className="Strong">
      <div>
        <h2>정확히 포함시킬 검색어</h2>
      </div>
      <input type="text" name="strong" id="strong" placeholder="콤마(,)로 구분하여 여러개 입력 가능." onChange={(e) => {
        e.preventDefault();
        console.log(e.target.value);
        dispatch({
          type: 'SETSTRONG',
          payload: e.target.value
        });
      }}/>
    </div>
  );
}

export default Strong;
