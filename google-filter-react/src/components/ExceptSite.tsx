import { useDispatch } from 'react-redux';

/*
interface ExceptSiteProps {

}

interface ExceptSiteState {
  content: string
}
*/

function ExceptSite(): JSX.Element {
  const dispatch = useDispatch();

  return (
    <div className="ExceptSite">
      <div>
        <h2>제외할 사이트</h2>
      </div>
      <input type="text" name="except-site" id="except-site" placeholder="도메인 네임 형태(예: namu.wiki)로 입력. 콤마(,)로 구분하여 여러개 입력 가능." onChange={(e) => {
        e.preventDefault();
        console.log(e.target.value);
        dispatch({
          type: 'SETEXCEPT',
          payload: e.target.value
        });
      }}/>
    </div>
  );
}

export default ExceptSite;
