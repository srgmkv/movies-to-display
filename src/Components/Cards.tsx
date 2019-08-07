import React from 'react'
import { IMovieItem } from '../interfaces'
import MovieItem from './MovieItem'

interface CardListProps {
  moviesList: IMovieItem[]
  year: number
}

const Cards = ({ moviesList, year }: CardListProps) => {
  return (
    <div className="cards">
      {moviesList.filter(item => item.year === year)
      .map(item => 
      <MovieItem
      localName={item.localized_name}
      name={item.name}
      rating={item.rating}
       />)}
    </div>
  )

}

export default Cards;
