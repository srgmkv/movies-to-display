import React from 'react'
import { IMovieItem } from '../interfaces'
import MovieItem from './MovieItem'

interface CardsByRating {
  moviesList: IMovieItem[],
  sortedByRatingType: string

}

const CardsByRating = ({ moviesList, sortedByRatingType }: CardsByRating) => {
  const newlist = moviesList.map(item => {
    return item.rating ? item : { ...item, rating: 0 }
  })
  console.log('newlist', newlist)



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
