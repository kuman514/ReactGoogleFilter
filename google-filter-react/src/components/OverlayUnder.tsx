import { useDispatch, useSelector } from 'react-redux';
import firebase from 'firebase/app';

import { StoreState } from '../store/StoreState';
import { firebaseAppDBRef } from '../configs/firebase';

/*
interface OverlayUnderProps {
  recentQueries: string[],
  user?: firebase.default.User | null,
  onDelete: Function
}

interface OverlayUnderState {
}
*/

function OverlayUnder(): JSX.Element {
  const userSelector = (state: StoreState): firebase.User | null | undefined => {
    return state.user;
  };
  const user: firebase.User | null | undefined = useSelector(userSelector);

  const recordSelector = (state: StoreState): string[] => {
    return state.record;
  };
  const record: string[] = useSelector(recordSelector);

  const dispatch = useDispatch();

  const onDelete = (index: number): void => {
    if (!user) {
      return;
    }

    const newRecent: string[] = Array.from(record);
    if (newRecent.length <= index) {
      return;
    }

    // Remove recent[index]
    newRecent.splice(index, 1);

    // Send to Firebase DB
    if (firebaseAppDBRef) {
      firebaseAppDBRef.ref(`/recent/${user.uid}`).set(newRecent);
    }
    
    dispatch({
      type: 'CHANGERECORD',
      payload: newRecent
    });
  };

  const showRecords = (): JSX.Element => {
    if (!user || record.length === 0) {
      return (
        <div>
          {
            user ? (
              <span>최근 기록이 없습니다.</span>
            ) : (
              <span>로그인 후 이용하실 수 있습니다.</span>
            )
          }
        </div>
      );
    }

    const finalContent: JSX.Element[] = [];
    record.forEach((query, index) => {
      finalContent.push(
        <li key={`recent-${index}`}>
          <button
            onClick={() => {
              onDelete(index);
            }
          }>
            ❌
          </button>
          <a
            href={`https://www.google.com/search?q=${query}`}
            target="_blank"
            rel="noreferrer"
          >
            {query}
          </a>
        </li>
      );
    });

    return (
      <ul>
        {finalContent}
      </ul>
    );
  }

  return (
    <div className="OverlayUnder">
      <div className="OverlayTitle">
        { user ? `${user.displayName}의 ` : '' }최근 검색어
      </div>
      <div className="RecentQueries">
        { showRecords() }
      </div>
    </div>
  );
}

export default OverlayUnder;
