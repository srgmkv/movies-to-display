import React from 'react'
import { IMovieItem } from '../interfaces'
import MovieItem from './MovieItem'

interface CardListProps {
  moviesList: IMovieItem[]
  year?: number
  sortedByYearType?: string
}

const CardsInYearBlock = ({ moviesList, year }: CardListProps) => {
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

const CardsByYear = ({ moviesList, sortedByYearType }: CardListProps) => {

  const years = moviesList.length > 0 ? moviesList.map((item: IMovieItem) => item.year)
    .filter((v, i, a) => a.indexOf(v) === i) : [];
   
  let sortedYears: number[] | undefined = sortedByYearType === "asc" ?
     years.sort((a, b) => a - b):
     years.sort((a, b) => b - a)
  
  // 
  return (
    <div className="movie-list">
      
      {sortedYears.map(year => {
        return (
          <div className="sort-by-year-block">
            <div className="year">{year}</div>
            <CardsInYearBlock moviesList={moviesList} year={year} />
          </div>
        )
      })}
    </div>
  )
}

export default CardsByYear;