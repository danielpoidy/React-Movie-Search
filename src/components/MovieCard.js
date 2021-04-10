import React from 'react'

const MovieCard = (props) => {
  return (
    <div className="card">
      <img 
        className='card-image' 
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.posterPath}`} alt={props.title+ 'poster'}/>
      <div className="card-content">
        <h3 className="card-title">{props.title}</h3>
        <p><small>RELEASE DATE : {props.releaseDate}</small></p>
        <p><small>RATING : {props.voteAverage}</small></p>
        <p className="card-description">{props.overview}</p>
      </div>
    </div>
  )
}

export default MovieCard
