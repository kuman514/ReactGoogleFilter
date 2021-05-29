import React from 'react';
import { Component } from 'react';

interface CategoryProps {

}

interface CategoryState {
  type: number
}

class Category extends Component<CategoryProps, CategoryState> {
  constructor(props: CategoryProps) {
    super(props);
    this.state = {
      type: 0
    }
  }

  getContent = (): string => {
    switch (this.state.type) {
      case 0:
        return '';
      case 1:
        return '&tbm=isch';
      case 2:
        return '&tbm=nws';
      case 3:
        return '&tbm=vid';
    }
    return '';
  }

  public render(): JSX.Element {
    return (
      <div className="Category">
        <div>
          <h2>카테고리</h2>
        </div>
        <div className="CategoryType" onChange={(e) => {
          this.setState({
            type: Number((e.target as HTMLInputElement).value)
          });
        }}>
          <input type="radio" name="SelectedCategory" id="CategoryAll" value="0" defaultChecked/>
          <label>통합</label>
          <input type="radio" name="SelectedCategory" id="CategoryImage" value="1"/>
          <label>이미지</label>
          <input type="radio" name="SelectedCategory" id="CategoryNews" value="2"/>
          <label>뉴스</label>
          <input type="radio" name="SelectedCategory" id="CategoryVideo" value="3"/>
          <label>동영상</label>
        </div>
      </div>
    );
  }
}

export default Category;
