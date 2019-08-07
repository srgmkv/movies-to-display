import React from 'react'
import { IMovieItem } from '../interfaces'
import MovieItem from './MovieItem'

interface CardsByRating {
  moviesList: IMovieItem[],
  sortedByRatingType: string

}

const CardsByRating = ({ moviesList, sortedByRatingType }: CardsByRating) => {
  const sortedByRating = sortedByRatingType === "asc" ?
    moviesList.sort((a, b) => a.rating - b.rating) :
    moviesList.sort((a, b) => b.rating - a.rating)

  return (
    <div className="cards">
      {sortedByRating && moviesList.map(item =>
        <MovieItem
          key={item.id}
          localName={item.localized_name}
          name={item.name}
          rating={item.rating}
          id={item.id}
        />)}
    </div>
  )

}

export default CardsByRating;
