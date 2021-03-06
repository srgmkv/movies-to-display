import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { AppState } from '../interfaces'
import { getMoviesData } from '../actions/fetching-actions'
import MoviesList from '../Containers/MoviesList'
import Modal from './Modal'

interface AppStateProps {
   isModalShown: boolean
}

interface AppDispatchProps {
   getMoviesData: () => void
}

type AppProps = AppStateProps & AppDispatchProps

//Компонент -точка входа
class App extends React.Component<AppProps> {
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

const mapStateToProps = (state: AppState): AppStateProps => ({
   isModalShown: state.modal.isShown
})

export default connect(mapStateToProps, { getMoviesData })(App)