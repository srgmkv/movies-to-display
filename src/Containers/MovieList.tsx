import React from 'react'
import { IMovieItem } from '../interfaces'
import { connect } from 'react-redux'
import { getMoviesData } from '../actions/fetching-actions'
import Cards from '../Components/Cards'

interface State {
  errMessage: string,
  moviesList: IMovieItem[]
}

interface Props extends State {
  getMoviesData: typeof getMoviesData
}

class MovieList extends React.Component<Props> {
  componentDidMount() {
    this.props.getMoviesData();
  }

  render() {
    const { errMessage, moviesList } = this.props
    const years = moviesList.length > 0 ? moviesList.map((item: IMovieItem) => item.year)

      .filter((v, i, a) => a.indexOf(v) === i)
      .sort((a, b) => a - b) : [];
    console.log('years', years)

    return (
      <>{errMessage && <p>{errMessage}</p>}

        <div className="movie-list">
          {years.map(year => {
            return (
              <div className="sort-by-year-block">
                <div className="year">{year}</div>
                <Cards moviesList={moviesList} year={year} />
              </div>
            )
          })}
        </div>
      </>

    )
  }
}

const mapStateToProps = (state: State): State => ({
  errMessage: state.errMessage,
  moviesList: state.moviesList
})

export default connect(mapStateToProps, { getMoviesData })(MovieList)