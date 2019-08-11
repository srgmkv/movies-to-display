import React from 'react'
import { IState, IMovieItem } from '../interfaces'
import { connect } from 'react-redux'
import { hideModal } from '../actions/modal-actions'
import './Modal.scss'

interface IHideModal extends IModal {
  hideModal: typeof hideModal
}

interface IModal {
  moviesList: IMovieItem[]
  id: number | null
}

//Модальное окно, вызывается кликом по фильму в списке с информацией о фильме 
class Modal extends React.Component<IHideModal> {
  componentDidMount() { //вешаем обработчик нажатия Esc
    document.addEventListener('keydown', this.hideModalOnEsc);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.hideModalOnEsc);
  }

  hideModalOnEsc = (e: any) => {
    if (e.key === 'Escape') {
      this.props.hideModal()
    }
  }

  render() {
    const { id, moviesList, hideModal } = this.props
    const [movieItem] = moviesList.filter(item => item.id === id) //берем нужный фильм  по id из стейта
    const { description, name, localized_name, year, rating, image_url } = movieItem //данные для рендера карточки фильма

    return (
      <div className="overlay" onClick={hideModal}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <div className="header">
            <div className="back"
              onClick={hideModal} />
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
    )
  }
}

const mapStateToProps = (state: IState): IModal => ({
  moviesList: state.moviesList,
  id: state.modal.id
})

export default connect(mapStateToProps, { hideModal })(Modal)