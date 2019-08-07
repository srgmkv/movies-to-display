import React from 'react'
import { IMovieItem } from '../interfaces'
import MovieItem from './MovieItem'

interface CardsByRating {
  moviesList: IMovieItem[]
 
}

const CardsByRating = ({ moviesList }: CardsByRating) => {
 return (
    <div className="cards">
      {moviesList && moviesList.map(item =>
        <MovieItem
          localName={item.localized_name}
          name={item.name}
          rating={item.rating}
        />)}
    </div>
  )

}

export default CardsByRating;
