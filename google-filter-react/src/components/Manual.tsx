import React from 'react';

function Manual(): JSX.Element {
  return (
    <div className="Manual">
      <h2>옵션 설명</h2>
      주요 검색어: 익히 사용되는 방법으로 검색합니다.<br/>
      강조 검색어: 단어의 모든 글자를 정확히 포함하여 검색합니다.<br/>
      제외할 사이트: 특정 사이트로부터의 결과를 검색 결과에서 제외합니다. (예: 나무위키로부터의 결과를 제외하고 싶다면 namu.wiki 입력)<br/>
      ",(콤마)"로 구분하여 여러 개 입력할 수 있습니다.<br/>
      세이프서치 활성화: Google 세이프서치를 적용할지에 대한 여부를 설정합니다.<br/>
      검색 기간: 어느 기간까지의 결과를 찾을지 결정합니다.
    </div>
  );
}

export default Manual;
