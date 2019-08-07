import React from 'react'
import onClickOutside from "react-onclickoutside";
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

class Modal extends React.Component<IHideModal> {

  handleClickOutside = () => {
    this.props.hideModal()
  };

  render() {
    const { moviesList, id } = this.props
    const [movieItem] = moviesList.filter(item => item.id === id)
    const { description, name, localized_name, year, rating, image_url } = movieItem

    return (
      <div className="modal">
        <div className="header">
          <div className="back"
            onClick={this.props.hideModal} />
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
    )
  }
}

const mapStateToProps = (state: IState): IModal => ({
  moviesList: state.moviesList,
  id: state.modal.id
})

const HOC = onClickOutside(Modal)
export default connect(mapStateToProps, { hideModal })(HOC)