//영화앱 로딩화면구현 isLoadingstate
//constructor(props) -> 렌더 -> componentDidMount -> 
//자바스크립트에게 getMovies()함수는 시간이 좀 필요해 라고 해야함 -> async, await
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state ={
    isLoading: true,
    movies: [],
  }

  getMovies = async () => { //이함수는 시간이 필요해~~ 비동기야
    const {
      data: {
        data: {movies},
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json'); // ㅇㅋ~~실행을 기다려줘 비동기라서 기다려야해

    // console.log(movies);
    this.setState({ movies, isLoading: false});
  }


  componentDidMount() {
    // 영화 데이터 로딩
    // setTimeout(() => {
    //   this.setState({isLoading: false});
    // }, 2000);
    this.getMovies();
  }
  render() {
    const { isLoading} = this.state;
    return <div>{isLoading ? 'true 로딩중' : 'false we are ready'}</div>
  }
}

export default App;