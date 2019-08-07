import React from 'react'
import { IMovieItem } from '../interfaces'
import MovieItem from './MovieItem'

interface CardsInYearBlock {
  moviesList: IMovieItem[]
  year: number
}

interface CardsByYear {
  list: IMovieItem[]
  years: number[]
}

// Компонент рендерит набор блоков Год, в котором рендерятся компоненты Фильмы.
// Ему передаем список фильмов из стейта и массив отсорттированных годов.
const CardsByYear = ({ list, years }: CardsByYear) => {

  return (
    <div className="movie-list">

      {years.map(year => {
        return (
          <div className="sorted" key={year}>
            <div className="year">{year}</div>
            <CardsInYearBlock moviesList={list} year={year} />
          </div>
        )
      })}

    </div>
  )
}

//Компонент рендерит список фильмов в блоке Год
const CardsInYearBlock = ({ moviesList, year }: CardsInYearBlock) => {
  return (
    <div className="cards">
      {moviesList.filter(item => item.year === year)
        .sort((a, b) => a.rating - b.rating)
        .map(item =>
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

export default CardsByYear