import React from 'react'
import { IMovieItem, IState } from '../interfaces'
import { connect } from 'react-redux'
import { getMoviesData } from '../actions/fetching-actions'
import { IFilter, VisibilityFilters } from '../actions/filter-actions'
import CardsByRating from '../Components/CardsByRating'
import CardsByYear from '../Components/CardsByYear'

interface State {
  errMessage: string,
  moviesList: IMovieItem[]
  filter: IFilter
}

interface Props extends State {
  getMoviesData: typeof getMoviesData
}
const mapStateToProps = (state: IState): State => ({
  moviesList: state.moviesList,
  errMessage: state.fetchingStatus.errMessage,
  filter: state.visibilityFilter

})

class MovieList extends React.Component<Props> {
  componentDidMount() {
    this.props.getMoviesData();
  }

  getFilteredMovies = (list: IMovieItem[], sortType: IFilter) => {
    switch (sortType) {
      case VisibilityFilters.FILTER_BY_YEAR_ASC:
        return (
          <CardsByYear moviesList={list} sortedByYearType="asc" />
        )

      case VisibilityFilters.FILTER_BY_YEAR_DESC:
        return (
          <CardsByYear moviesList={list} sortedByYearType="desc" />
        )

      case VisibilityFilters.FILTER_BY_RATING_ASC:
        const sortedByRatingAsc = list.sort((a, b) => a.rating - b.rating)
        return <CardsByRating moviesList={sortedByRatingAsc} />

      case VisibilityFilters.FILTER_BY_RATING_DESC:
        const sortedByRartingDesc = list.sort((a, b) => b.rating - a.rating)
        return <CardsByRating moviesList={sortedByRartingDesc} />

      default:
        throw new Error('Unknown filter: ' + sortType)
    }
  }



  render() {
    const { errMessage, moviesList, filter } = this.props

    //console.log('years', years)

    return (
      <>{errMessage && <p>{errMessage}</p>}
        {this.getFilteredMovies(moviesList, filter)}
      </>

    )
  }
}


export default connect(mapStateToProps, { getMoviesData })(MovieList)