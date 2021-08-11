//영화앱 로딩화면구현 isLoadingstate
//constructor(props) -> 렌더 -> componentDidMount -> 
//자바스크립트에게 getMovies()함수는 시간이 좀 필요해 라고 해야함 -> async, await
import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component {
  state ={
    isLoading: true,
    movies: [],
  }

  getMovies = async () => { //이함수는 시간이 필요해~~ 비동기야
    const {
      data: {
        data: {movies},
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating'); // ㅇㅋ~~실행을 기다려줘 비동기라서 기다려야해

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
    const { isLoading, movies} = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie
                key = {movie.id}
                id = {movie.id}
                year = {movie.year}
                title = {movie.title}
                summary = {movie.summary}
                poster = {movie.medium_cover_image}
                genres = {movie.genres}
                />
            ))}
          </div>
          
        )}
      </section>
    );
  }
}

export default Home;