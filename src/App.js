//5 클래스형 컴포너느에서 사용할 수 있는 개념 state
//  클래스형 컴포넌트에서는 JSX를 반환하기 위해 render() 함수를 사용함

//6 생명주기 함수를 이용해서 영화데이터 가져와야함.
// -js constructor() : 자바스크립트에서 render보다 먼저실행 p.191
// -componentDidMount() : 컴포넌트가 처음 화면에 그려지면 실행되는 함수 p.131
import { thisStringValue } from 'es-abstract';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('hello'); //생명주기`1`
  }

  state = {
    const: 0,
  };

  set = () => {
    this.setState({count: 10});
  }

  add = () => {
    //this.setState({count: this.state.count +1}); //상태는 setState를 이용하여 변경, render가 자동으로 실행됨 .
    this.setState(current => ({
      count: current.count + 1,
    }));
  }

  minus = () => {
    this.setState(current => ({
      count: current.count - 1,
    }));
  }

  componentDidMount() {
    console.log('component rendered');//생명주기`3`
  }

  componentDidUpdate() {
    console.log('I just updated'); // setState()함수실행 -> render()함수실행 -> componentDidUpdated()함수실행
  }

  componentWillUnmount() {
    console.log('Goodbye, cruel worldㅜㅠ'); // 컴포넌트가 화면에서 떠날 때 실행하는것.
  }


  render() {
    console.log("I'm rendering");//생명주기`2`
    return (
      <>
        <h1>The numvber is: {this.state.count}</h1>
        <button onClick={this.set}>Set</button>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Miuns</button>
      </>
    );
  }
}

export default App;