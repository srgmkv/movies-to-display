import React from 'react'
import { connect } from 'react-redux'
import { showModal } from '../actions/modal-actions'
import { Link } from 'react-router-dom'

interface MovieItemProps {
  localName: string
  name: string
  rating: number
  id: number
  showModal: typeof showModal
}

//Компонент рендерит карточку фильма для списка фильмов
const MovieItem = ({ localName, name, rating, id, showModal }: MovieItemProps) => {

  return (<Link to={`movies/${id}`}>
    <div className="movie-card"
      onClick={() => showModal(id)}
    >
      <div className="names-block">

        <div className="local-name">{localName}</div>
        <div className="name">{name}</div>
      </div>
      <div className="rating">{rating ? <div>{rating}</div> : ''}</div>

    </div></Link>
  )
}

export default connect(null, { showModal })(MovieItem)


