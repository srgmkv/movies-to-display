import React from 'react'
import { IMovieItem } from '../interfaces'
import MovieItem from './MovieItem'

interface CardsByRating {
  list: IMovieItem[]

}

//Компонент рендерит список фильмов при сортировке по рейтингу
const CardsByRating = ({ list }: CardsByRating) => {

  return (
    <div className="cards">
      {list && list.map(item =>
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
