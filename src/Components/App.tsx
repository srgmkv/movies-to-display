import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { IState } from '../interfaces'
import { getMoviesData } from '../actions/fetching-actions'
import MoviesList from '../Containers/MoviesList'
import Modal from './Modal'

interface IModal {
   isModalShown: boolean
}

interface Props extends IModal {
   getMoviesData: typeof getMoviesData
}

//Компонент -точка входа
class App extends React.Component<Props> {
   componentDidMount() {
      this.props.getMoviesData() //запрашиваем данные на сервере
   }

   render() {
      return (
         <div className="App">
            <Header />
            {!this.props.isModalShown ? <MoviesList /> : <Modal />} {/* показываем фильмов || модальное окно по флагу из стейта */}
         </div>
      )
   }
}

const mapStateToProps = (state: IState): IModal => ({
   isModalShown: state.modal.isShown
})

export default connect(mapStateToProps, { getMoviesData })(App)