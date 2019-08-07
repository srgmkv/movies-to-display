import React from 'react'
import { IMovieItem } from '../interfaces'
import MovieItem from './MovieItem'

interface CardListProps {
  moviesList: IMovieItem[]
 
}

const CardsByRating = ({ moviesList }: CardListProps) => {
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
