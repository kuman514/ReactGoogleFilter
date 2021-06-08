# ReactGoogleFilter
React + TypeScript를 이용하여, Google 검색에서 유용하게 쓰일 수 있는 검색 필터 옵션을 한 눈에 사용할 수 있도록 해주는 웹 앱입니다.   
[앱 사용해보기](https://kuman514.github.io/ReactGoogleFilter/)

# Option (옵션 설명)
- 각 옵션(주요 검색어, 강조 검색어, 제외할 사이트)의 내용은 `,(콤마)`로 구분하여 여러 개를 입력할 수 있습니다.
- 카테고리: 통합검색, 이미지, 뉴스, 동영상 등의 카테고리를 선택하여 검색합니다.
- 검색어: 익히 사용되는 방법으로 검색합니다.
- 정확히 포함시킬 검색어: 단어의 모든 글자를 정확히 포함하여 검색합니다.
- 제외할 사이트: 해당하는 사이트의 주소를 검색 결과에서 제외합니다. (예: 나무위키로부터의 결과를 제외하고 싶다면 namu.wiki 입력)
- 세이프서치 활성화: Google 세이프서치를 적용할지에 대한 여부를 설정합니다.
- 검색 기간: 설정한 기간에 해당하는 검색 결과만 보여줍니다.
- 로그인 후 최근 기록: 로그인 버튼을 누르면 최근 검색 기록을 이용할 수 있습니다. (현재 베타)

# Features (구현에 사용된 요소)
- 각 옵션의 입력값에 대한 `Component`의 `ref` 속성 콜백을 이용하여 외부에서 `getContent()` 멤버 함수를 호출할 수 있도록 참조시킴. (`Primary`, `Strong`, `ExceptSite`, `SafeSearch`)
- 각 옵션의 입력값에 대한 `string[]`을 리턴하는 각 컴포넌트의 `getContent()` 멤버 함수에 대해, 각 배열의 원소마다 `trim()`을 통해 양옆 불필요한 공백을 제거, `filter()`를 통해 비어있는 `string` 제거 등등으로, 입력된 값을 최대한 정리.
- `state`가 필요없는 컴포넌트에 한해 함수형 컴포넌트로 구현. (`App`, `Logo`, `Manual`)
- Google Firebase를 이용한 로그인 및 최근 기록 저장.

# Updates (업데이트)
- 05-17-2021: 기본 기능 구현 및 레이아웃 다듬기
- 05-18-2021: 앱에 매뉴얼 추가
- 05-19-2021: 엔터키를 눌러 검색 가능
- 05-20-2021: 검색 기간 설정 기능 추가
- 05-24-2021: UI 개선 (간단명료한 매뉴얼 및 검색창 크기 수정)
- 05-26-2021: UI 개선 (매뉴얼을 `placeholder`로 옮긺)
- 05-27-2021: 검색 기간 직접 설정 옵션 추가
- 05-30-2021: 카테고리 선택 기능 추가
- 05-31-2021: dark, light 테마 추가 (OS 설정에 기반 / 토글 변경 가능)
- 06-07-2021: 로그인 시 최근 검색 기록 이용 가능 (최대 10개, 베타테스트 중)
- 06-08-2021 (1): 로그인 또는 로딩 중, "로딩중" 오버레이를 통해 조작을 막음
- 06-08-2021 (2): 엔터 키가 일부 구역에만 작동하는 문제 해결
- 06-09-2021: 최근 기록 삭제 기능 추가

# Issues (오류)
- 06-07-2021 (1): ~~로그인 후 잠시동안 로그인 버튼이 존재하는 문제~~ -> 06-08-2021 (1) 업데이트에 반영됨.
- 06-07-2021 (2): ~~엔터 키가 일부 구역에만 작동하는 문제~~ -> 06-08-2021 (2) 업데이트에 반영됨.

# Feedbacks (피드백)
- 05-17-2021: 사용 방법을 잘 모르겠다. 앱에 매뉴얼을 추가해주는게 어떨까? -> 05-18-2021 업데이트에 반영됨.
- 05-18-2021: 엔터(Return)키를 눌러 검색을 할 수 있었으면 좋겠다. -> 05-19-2021 업데이트에 반영됨.
- 05-19-2021: 검색 기간 설정 기능도 추가해달라. -> 05-20-2021 업데이트에 반영됨.
- 05-21-2021: 매뉴얼이 너무 아래에 있고 장황해서 읽기 힘들다. -> 05-24-2021 업데이트에 반영됨.
- 05-22-2021: 검색창이 너무 작다. -> 05-24-2021 업데이트에 반영됨.
- 05-24-2021: 매뉴얼을 항상 띄워줄 필요가 있을까? -> 05-26-2021 업데이트에 반영됨.
- 05-26-2021: 검색 기간을 직접 설정할 수도 있으면 좋겠다. -> 05-27-2021 업데이트에 반영됨.
- 05-27-2021: 이미지 검색도 이 앱에서 가능한지? -> 05-30-2021 업데이트에 반영됨.
- 05-30-2021: 테마를 바꿀 수 있게 해달라 -> 05-31-2021 업데이트에 반영됨.
- 06-03-2021: 최근 검색어를 저장하게 해달라 -> 06-07-2021 업데이트에 반영됨.
- 06-07-2021: 최근 검색어를 삭제할 수 있게 해달라 -> 06-09-2021 업데이트에 반영됨.
