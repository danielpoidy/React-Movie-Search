import React, {useState} from 'react'
import MovieCard from './MovieCard'

const SearchMovies = () => {
  const [query, setQuery] = useState('') //for getting input value
  const [movies, setMovies] = useState([])

  const handleChange = (event) => {
    setQuery(event.target.value)
  }
  
  const searchMovies = async(e) => {
    e.preventDefault()

    // const query = 'Jurassic Park'

    const url = `https://api.themoviedb.org/3/search/movie?api_key=e5e8983852f9395763c1b130d9f087b4&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const response = await fetch(url)
      const data = await response.json()
      setMovies(data.results)
    } catch(err) {
      // console.error(err)
    }
  }

  const movieShow = movies.filter(movie => movie.poster_path).map(movie => (
    <MovieCard key={movie.id} title={movie.title} relaseDate = {movie.release_date} voteAverage={movie.vote_average} overview={movie.overview} posterPath={movie.poster_path} />
  ))

  return (
    <div>
      <form className='form' onSubmit={searchMovies}>
        <label htmlFor="query" className='label'>
          Movie Name
        </label>
        <input 
          className='input'
          type="text" 
          name='query' 
          placeholder='i.e Jurassik Park'
          value={query}
          onChange={handleChange}
        />
        <button 
          type='submit' 
          className="button"
        >Search</button>
    </form>
    <div className='movieslist'>
      {movieShow}
    </div>
  </div>
  )
}

export default SearchMovies
