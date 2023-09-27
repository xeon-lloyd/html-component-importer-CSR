# html-component-importer-CSR
CSR로 분리된 HTML 컴포넌트를 import 해주는 js  
SSR(서버 사이드 랜더링)을 구축하기 어렵거나 컨포넌트 관리가 어려운 개발자를 위한 단순 html importer  
그러나 컴포넌트를 불러오기 위해서는 서버가 있여야하기 때문에 VS code의 live server 확장 프로그램 사용 권장  

## why?
학교에서 만들고 싶은걸 웹 프론트 기초를 공부하는 친구가 있었는데 헤더, 푸터 같은 컴포넌트를 분리하고 싶어했음  
그러나 프론트를 다루는 친구여서 SSR을 넣기 위해 백엔드를 다루자니 과도하고, React 같은 CSR 프레임워크를 사용하려고 해도 진입장벽이 커서 다루기 어려웠음  
본인도 웹을 처음 배울때 그런 경험이 있었고 하고 싶은 것을 쉽게 당장 할 수 없는 것은 동기, 의욕과도 연결될기 때문에 그런 친구를 위해 옆에서 짧막하게 스크립트를 만들어 봄  

## usage
### 1. 스크립트 적용
htmlCompLoader.js 파일을 프로젝트 폴더로 옮긴 뒤
```
<script src="htmlCompLoader.js"></script>
```
해당 스크립트를 불러오는 script 태그를 html 파일 하단에 삽입합니다 (경로는 프로젝트에 맞게 수정)

### 2. 컴포넌트 분리
html 파일에 있는 분리할 컴포넌트(헤더, 메뉴, 푸터 등)를 별도의 .html 파일로 만들어 분리합니다.

### 3. 컴포넌트 불러오기
컴포넌트를 불러올 위치에
```
<import-comp data-src="./components/compo.html"></import-comp>
```
```<import-comp>```태그를 사용하여 ```data-src``` 속성으로 분리한 컴포넌트의 경로를 입력합니다.

 * 자세한 예제는 example.html 파일을 참고해주세요

## caution
 * 컴포넌트를 로드하기 위해서는 http / https 환경에서 html이 동작해야 합니다. (단순 실행한 html 파일에서 작동하지 않음 - CORS file://)
 * import하는 컴포넌트에 있는 script태그는 실행, 로드되지 않습니다.