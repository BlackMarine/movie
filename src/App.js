import React from 'react';

function Food({name, picture}){
  // console.log(props);
  return(
    <>
    <h2>i love {name}</h2>
    <img src={picture} />
    </>
  )
}

const foodILike = [
  {
    name: 'kimchi1',
    image: '1'
  },
  {
    name: 'kimchi2',
    image: '2'
  },
  {
    name: 'kimchi3',
    image: '3'
  },
  {
    name: 'kimchi4',
    image: '4'
  },
];

function App() {
  return (
  <div>
    <h1>hi</h1>
    {foodILike.map(dish => (<Food name={dish.name} picture={dish.image} />))}
  </div>
  );
}



export default App;

//1 JSX JavaScript eXtension
//HTML같은 마크업 언어를 리터럴로 입력하는 것으로 보이는데, 빌드 시 Babel에 의해 자바스크립트로 변환된다. 자바스크립트 코드를 HTML처럼 표현할 수 있기 때문에 용이한 개발이 가능
//const element = <h1>Hello, world!</h1>;
//태그 문법은 문자열도 HTML도 아닙니다. JSX라고 부르며, 자바스크립트의 문법 확장
// JSX를 리액트와 함께 사용하여 UI가 실제로 어떻게 보일 지 설명하는 걸 권장합니다.
//JSX는 템플릿 언어처럼 보일 수 있지만, 자바스크립트를 기반

//2 컴포넌트 App Potato 등..

//3 props 반복작업x 컴포넌트로 데이터 전달. (컴포넌트에서 컴포넌트로 전달하는 데이터)
//문자열인경우를 제외하고 {}감싸줘야함 기억하기

//4 