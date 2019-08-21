import React from 'react'
import { IMovieItem, AppState } from '../interfaces'
import { connect } from 'react-redux'
import { Sort, SortingActions } from '../actions/sorting-actions'
import CardsByRating from '../Components/CardsByRating'
import CardsByYear from '../Components/CardsByYear'
import Header from '../Components/Header'
import './MoviesList.scss'

interface MovieListProps {
  errMessage: string,
  moviesList: IMovieItem[]
  sort: Sort
}

//Компонент подготавливает данные для отображения списка фильма с нужной фильтрацией
const MovieList = ({ moviesList, errMessage, sort }: MovieListProps) => {

  //ф-я делает нужный компонент по типу сортировки
  const getSortedMovies = (list: IMovieItem[], sortType: Sort) => {

    const years = list.map((item: IMovieItem) => item.year)//массив уникальных годов
      .filter((v, i, a) => a.indexOf(v) === i)

    const newlist = list.map(item => {  // список фильмов, где false рейтинги заменены явно на 0 для точной сортировки
      return item.rating ? item : { ...item, rating: 0 }
    })

    switch (sortType) { //проверяем тип сортировки и готовим данные, после чего возвращаем нужный компонент с этими данными
      case SortingActions.SORT_BY_YEAR_ASC:
        const yearsByAsc = years.sort((a, b) => a - b)
        return <CardsByYear list={list} years={yearsByAsc} />

      case SortingActions.SORT_BY_YEAR_DESC:
        const yearsByDesc = years.sort((a, b) => b - a)
        return <CardsByYear list={list} years={yearsByDesc} />

      case SortingActions.SORT_BY_RATING_ASC:
        const moviesByRatingByAsc = newlist.sort((a, b) => a.rating - b.rating)
        return <CardsByRating list={moviesByRatingByAsc} />

      case SortingActions.SORT_BY_RATING_DESC:
        const moviesByRatingByDesc = newlist.sort((a, b) => b.rating - a.rating)
        console.log('moviesByRatingByDesc', moviesByRatingByDesc)
        return <CardsByRating list={moviesByRatingByDesc} />

      default:
        throw new Error('Unknown sort: ' + sortType)
    }
  }

  return (
    <>
      <Header />
      {errMessage && <p className="error">{errMessage}</p>} {/* Выводим ошибки */}
      {getSortedMovies(moviesList, sort)} {/* Рендерим список с нужной сортировкой */}
    </>
  )
}

const mapStateToProps = (state: AppState): MovieListProps => ({
  moviesList: state.moviesList,
  errMessage: state.fetchingStatus.errMessage,
  sort: state.sortingType
})

export default connect(mapStateToProps)(MovieList)