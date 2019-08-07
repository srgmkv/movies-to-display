import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { IState } from '../interfaces'
import MoviesList from '../Containers/MoviesList'
import Modal from '../Containers/Modal'

interface IModal {
   isModalShown: boolean
}
//Компонент -точка входа 
const App = ({ isModalShown }: IModal) => {
      return (
      <div className="App">
         <Header modalStatus={isModalShown}/>
         {!isModalShown ? <MoviesList /> : <Modal />}
      </div>
   )

}

const mapStateToProps = (state: IState): IModal => ({
   isModalShown: state.modal.isShown
})

export default connect(mapStateToProps)(App)