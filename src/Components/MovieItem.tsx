import React from 'react'
import { connect } from 'react-redux'
import { showModal } from '../actions/modal-actions'

interface CardProps {
  localName: string
  name: string
  rating: number
  id: number
  showModal: typeof showModal
}

const MovieItem = ({ localName, name, rating, id, showModal }: CardProps) => {

  return (
    <div className="movie-card"
      onClick={() => showModal(id)}
    >
      <div className="names-block">
        <div className="local-name">{localName}</div>
        <div className="name">{name}</div>
      </div>
      <div className="rating">{rating}</div>
    </div>
  )
}

export default connect(null, { showModal })(MovieItem)


