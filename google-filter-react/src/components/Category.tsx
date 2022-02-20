import React from 'react';
import { useDispatch } from 'react-redux';

/*
interface CategoryProps {

}

interface CategoryState {
  type: number
}
*/

function Category(): JSX.Element {
  const dispatch = useDispatch();

  return (
    <div className="Category">
      <div>
        <h2>카테고리</h2>
      </div>
      <div className="CategoryType" onChange={(e: React.FormEvent<HTMLDivElement>) => {
        if (e.target as HTMLInputElement) {
          console.log((e.target as HTMLInputElement).value);
          dispatch({
            type: 'SETCATEGORY',
            payload: (e.target as HTMLInputElement).value
          });
        }
      }}>
        <input type="radio" name="SelectedCategory" id="CategoryAll" value="" defaultChecked/>
        <label>통합</label>
        <input type="radio" name="SelectedCategory" id="CategoryImage" value="&tbm=isch"/>
        <label>이미지</label>
        <input type="radio" name="SelectedCategory" id="CategoryNews" value="&tbm=nws"/>
        <label>뉴스</label>
        <input type="radio" name="SelectedCategory" id="CategoryVideo" value="&tbm=vid"/>
        <label>동영상</label>
      </div>
    </div>
  );
}

export default Category;
