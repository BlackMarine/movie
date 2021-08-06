//5 클래스형 컴포너느에서 사용할 수 있는 개념 state
//  클래스형 컴포넌트에서는 JSX를 반환하기 위해 render() 함수를 사용함
import { thisStringValue } from 'es-abstract';
import React from 'react';

class App extends React.Component {
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

  render() {
    return (
      <>
        <h1>The numvber is: {this.state.count}</h1>
        
        
        
      </>
    );
  }
}

export default App;