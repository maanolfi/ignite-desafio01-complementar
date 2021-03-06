import { MovieCard } from './MovieCard';

interface Props {
  title: string,
  movies: Array<any>
}

const Content = ({ title, movies}: Props) => {
  return (
    <div className="container">
        <header>
          <span className="category">Categoria:<span>{title}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
  )
}

export default Content