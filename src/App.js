import React from 'react';
import PropTypes from 'prop-types';

function Food({name, picture, rating}){
  // console.log(props);
  return(
    <>
    <h2>i love {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name}/>
    </>
  )
}

const foodILike = [
  {
    id: 1,
    name: 'kimchi1',
    image: '1',
    rating: 5
  },
  {
    id: 2,
    name: 'kimchi2',
    image: '2',
    rating: 4.9
  },
  {
    id: 3,
    name: 'kimchi3',
    image: '3',
    rating: 3.6
  },
  {
    id: 4,
    name: 'kimchi4',
    image: '4',
    rating: 2.1
  },
];

// function renderFood(dish){
//   return <Food name={dish.name} picture={dish.image} />;
// }

// const renderFood = dish => <Food name={dish.name} picture={dish.image}/>;
// 5 props map을 이용한 컴포넌트를 여러 개 만드는 방법을 학습.

function App() {
  return (
  <div>
    <h1>hi</h1>
    {foodILike.map(dish => (
      <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
    ))}
  </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};



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