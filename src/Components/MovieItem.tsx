import React from 'react'
import { connect } from 'react-redux'
import { showModal } from '../actions/modal-actions'

interface MovieItemProps {
  localName: string
  name: string
  rating: number
  id: number
  showModal: typeof showModal
}

//Компонент рендерит карточку фильма для списка фильмов
const MovieItem = ({ localName, name, rating, id, showModal }: MovieItemProps) => {

  return (
    <div className="movie-card"
      onClick={() => showModal(id)}
    >
      <div className="names-block">
        <div className="local-name">{localName}</div>
        <div className="name">{name}</div>
      </div>
      <div className="rating">{rating ? <div>{rating}</div> : ''}</div>
    </div>
  )
}

export default connect(null, { showModal })(MovieItem)


