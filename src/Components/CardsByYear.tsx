import React from 'react'
import { IMovieItem } from '../interfaces'
import MovieItem from './MovieItem'

interface CardsInYearBlockProps {
  moviesList: IMovieItem[]
  year: number
}

interface CardsByYearProps {
  list: IMovieItem[]
  years: number[]
}

// Компонент рендерит набор блоков Год, внутри каждого будет список фильмов по этому году.
// Ему передаем список фильмов из стейта и массив отсортированных годов.
const CardsByYear = ({ list, years }: CardsByYearProps) => {
  return (
    <div className="movie-list">

      {years.map(year => {
        return (
          <div className="sorted-by-year" key={year}>
            <div className="year">{year}</div>
            <CardsInYearBlock moviesList={list} year={year} />
          </div>
        )
      })}

    </div>
  )
}

//Компонент рендерит список фильмов в блоке Год
const CardsInYearBlock = ({ moviesList, year }: CardsInYearBlockProps) => {
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