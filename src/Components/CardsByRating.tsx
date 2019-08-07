import React from 'react'
import { IMovieItem } from '../interfaces'
import MovieItem from './MovieItem'

interface CardsByRating {
  moviesList: IMovieItem[],
  sortedByRatingType: string

}
//Компонент рендерит список фильмов при сортировке по рейтингу
const CardsByRating = ({ moviesList, sortedByRatingType }: CardsByRating) => {

  // здесь создаем новый  массив фильмов, где меняем false рейтинг на явный ноль для точной сортировки
  const newlist = moviesList.map(item => {
    return item.rating ? item : { ...item, rating: 0 }
  })

  //сортируем массив по рейтингу
const sortedByRating = sortedByRatingType === "asc" ?
    newlist.sort((a, b) => a.rating - b.rating) :
    newlist.sort((a, b) => b.rating - a.rating)

  return (
    <div className="sorted">
      <div className="cards">
        {sortedByRating && sortedByRating.map(item =>
          <MovieItem
            key={item.id}
            localName={item.localized_name}
            name={item.name}
            rating={item.rating}
            id={item.id}
          />)}
      </div>
    </div>
  )

}

export default CardsByRating;
