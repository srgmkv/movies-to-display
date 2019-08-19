import React from 'react'
import { AppState, IMovieItem } from '../interfaces'
import { connect } from 'react-redux'
import { hideModal } from '../actions/modal-actions'
import './Modal.scss'
import { Link } from 'react-router-dom'


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
  componentDidMount() { //вешаем обработчик нажатия Esc
    document.addEventListener('keydown', this.hideModalOnEsc);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.hideModalOnEsc);
  }

  hideModalOnEsc = (e: { key: string }) => {
    if (e.key === 'Escape') {
      this.props.hideModal()
    }
  }

  render() {
    const { moviesList, hideModal, match } = this.props
    console.log('match', match.params.movieId)
    let movieItem, description, name, localized_name, year, rating, image_url
    if (moviesList.length > 0) {
      [movieItem] = moviesList.filter(item => item.id === Number(match.params.movieId)); //берем нужный фильм  по id из стейта
      //console.log('movieItem', movieItem)
      ({ description, name, localized_name, year, rating, image_url } = movieItem) //данные для рендера карточки фильма
    }
    return (
      moviesList.length > 0 &&
      <>
        <div className="overlay" >
          <div className="modal" onClick={(e) => e.preventDefault()}>
            <div className="header">
              <Link to=""><div className="back" /></Link>
              <div className="local-name">{localized_name}</div>
            </div>
            <div className="info">
              <div className="image">
                <span >
                  {image_url && <img src={image_url} alt={name} />}
                </span>
              </div>
              <div className="list-info">
                <div className="name">{name}</div>
                <div className="year">Год: <span className="year">{year}</span></div>
                <div className="rating">Рейтинг: <span className="rating">{rating}</span></div>
              </div>
            </div>
            <div className="description">{description}</div>
          </div>
        </div>

      </>
    )
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

export default connect(mapStateToProps, { hideModal })(Modal)