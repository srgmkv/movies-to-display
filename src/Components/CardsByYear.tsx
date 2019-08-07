import React from 'react'
import { IMovieItem } from '../interfaces'
import MovieItem from './MovieItem'

interface CardsInYearBlock {
  moviesList: IMovieItem[]
  year: number
}

interface CardsByYear {
  moviesList: IMovieItem[]
  sortedByYearType: string
}


const CardsInYearBlock = ({ moviesList, year }: CardsInYearBlock) => {
  return (
    <div className="cards">
      {moviesList.filter(item => item.year === year)
        .map(item =>
          <MovieItem
            key={item.id}
            localName={item.localized_name}
            name={item.name}
            rating={item.rating}
          />)}
    </div>
  )
}

const CardsByYear = ({ moviesList, sortedByYearType }: CardsByYear) => {

  const years = moviesList.length > 0 ? moviesList.map((item: IMovieItem) => item.year)
    .filter((v, i, a) => a.indexOf(v) === i) : [];

  const sortedYears = sortedByYearType === "asc" ?
    years.sort((a, b) => a - b) :
    years.sort((a, b) => b - a)

  // 
  return (
    <div className="movie-list">

      {sortedYears.map(year => {
        return (
          <div className="sort-by-year-block" key={year}>
            <div className="year">{year}</div>
            <CardsInYearBlock moviesList={moviesList} year={year} />
          </div>
        )
      })}
    </div>
  )
}

export default CardsByYear;