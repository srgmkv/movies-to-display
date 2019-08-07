import React from 'react'
import { IMovieItem, IState } from '../interfaces'
import { connect } from 'react-redux'
import { getMoviesData } from '../actions/fetching-actions'
import { ISort, SortingActions } from '../actions/sorting-actions'
import CardsByRating from '../Components/CardsByRating'
import CardsByYear from '../Components/CardsByYear'

interface State {
  errMessage: string,
  moviesList: IMovieItem[]
  sort: ISort
}

interface Props extends State {
  getMoviesData: typeof getMoviesData
}
const mapStateToProps = (state: IState): State => ({
  moviesList: state.moviesList,
  errMessage: state.fetchingStatus.errMessage,
  sort: state.sortingType
})

class MovieList extends React.Component<Props> {
  componentDidMount() {
    this.props.getMoviesData();
  }

  getSortedMovies = (list: IMovieItem[], sortType: ISort) => {
    switch (sortType) {
      case SortingActions.SORT_BY_YEAR_ASC:
        return (
          <CardsByYear moviesList={list} sortedByYearType="asc" />
        )

      case SortingActions.SORT_BY_YEAR_DESC:
        return (
          <CardsByYear moviesList={list} sortedByYearType="desc" />
        )

      case SortingActions.SORT_BY_RATING_ASC:
        return (
          <CardsByRating moviesList={list} sortedByRatingType="asc" />
        )

      case SortingActions.SORT_BY_RATING_DESC:
        return (
          <CardsByRating moviesList={list} sortedByRatingType="desc" />
        )
      default:
        throw new Error('Unknown sort: ' + sortType)
    }
  }

  render() {
    const { errMessage, moviesList, sort } = this.props
    return (
      <>
        {errMessage && <p>{errMessage}</p>}
        {this.getSortedMovies(moviesList, sort)}
      </>
    )
  }
}


export default connect(mapStateToProps, { getMoviesData })(MovieList)