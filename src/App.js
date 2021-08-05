import React from 'react';

function Food(props){
  console.log(props);
  return(
    <h1>i love Potato</h1>
  )
}
function App() {
  return (
  <div>
    <h1>hi</h1>
    <Food fav="Kimchi" somthing={true} papapapa={['hello', 1, 2, 3, 4, true]} />
  </div>
  );
}



export default App;

//JSX
//const element = <h1>Hello, world!</h1>;
//태그 문법은 문자열도 HTML도 아닙니다. JSX라고 부르며, 자바스크립트의 문법 확장
// JSX를 리액트와 함께 사용하여 UI가 실제로 어떻게 보일 지 설명하는 걸 권장합니다.
//JSX는 템플릿 언어처럼 보일 수 있지만, 자바스크립트를 기반

//컴포넌트 App Potato 등..

//props 반복작업x 컴포넌트로 데이터 전달. (컴포넌트에서 컴포넌트로 전달하는 데이터)
//문자열인경우를 제외하고 {}감싸줘야함 기억하기
