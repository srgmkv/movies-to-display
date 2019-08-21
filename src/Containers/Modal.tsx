import React from 'react'
import { AppState, IMovieItem } from '../interfaces'
import { connect } from 'react-redux'
import { hideModal } from '../actions/modal-actions'
import ModalView from '../Components/ModalView'

interface ModalDispatchProps {
  hideModal: typeof hideModal
}
interface Params {
  movieId: string
}

interface Match {
  params: Params
  path: string
  url: string
}

interface ModalStateProps {
  moviesList: IMovieItem[]
  id: number | null
  match: Match
}


type ModalProps = ModalStateProps & ModalDispatchProps

//Модальное окно, вызывается кликом по фильму в списке с информацией о фильме 
class Modal extends React.Component<ModalProps> {

   render() {
    const { moviesList, match } = this.props
    console.log('match', match.params.movieId)

    let movieItem: IMovieItem
    if (moviesList.length > 0) {
      [movieItem] = moviesList.filter(item => item.id === Number(match.params.movieId)); //берем нужный фильм  по id из стейта
      
      return <ModalView item={movieItem} />
    }

    return <div>Loading...</div>
  }
}

interface ownProps {
  match: Match
}
const mapStateToProps = (state: AppState, ownProps: ownProps): ModalStateProps => ({
  moviesList: state.moviesList,
  id: state.modal.id,
  match: ownProps.match
})



export default connect(mapStateToProps)(Modal)