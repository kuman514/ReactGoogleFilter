# ReactGoogleFilter
React + TypeScript를 이용하여, Google 검색에서 유용하게 쓰일 수 있는 검색 필터 옵션을 한 눈에 사용할 수 있도록 해주는 웹 앱입니다.   
[앱 사용해보기](https://kuman514.github.io/ReactGoogleFilter/)

# Option (옵션 설명)
- 각 옵션(주요 검색어, 강조 검색어, 제외할 사이트)의 내용은 `,(콤마)`로 구분하여 여러 개를 입력할 수 있습니다.
- 주요 검색어: 익히 사용되는 방법으로 검색합니다.
- 강조 검색어: 단어의 모든 글자를 정확히 포함하여 검색합니다.
- 제외할 사이트: 해당하는 사이트의 주소를 검색 결과에서 제외합니다. (예: 나무위키로부터의 결과를 제외하고 싶다면 namu.wiki 입력)
- 세이프서치 활성화: Google 세이프서치를 적용할지에 대한 여부를 설정합니다.

# Features (구현에 사용된 요소)
- 각 옵션의 입력값에 대한 `Component`의 `ref` 속성 콜백을 이용하여 외부에서 `getContent()` 멤버 함수를 호출할 수 있도록 참조시킴. (`Primary`, `Strong`, `ExceptSite`, `SafeSearch`)
- 각 옵션의 입력값에 대한 `string[]`을 리턴하는 각 컴포넌트의 `getContent()` 멤버 함수에 대해, 각 배열의 원소마다 `trim()`을 통해 양옆 불필요한 공백을 제거, `filter()`를 통해 비어있는 `string` 제거 등등으로, 입력된 값을 최대한 정리.
- `state`가 필요없는 컴포넌트에 한해 함수형 컴포넌트로 구현. (`App`, `Logo`, `Manual`)

# Updates (업데이트)
- 05-17-2021: 기본 기능 구현 및 레이아웃 다듬기
