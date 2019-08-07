import React from 'react'

interface CardProps {
  localName: string
  name: string
  rating: number
}

const MovieItem = ({ localName, name, rating }: CardProps) => {
  return (
    <div className="movie-card">
      <div className="names-block">
        <div className="local-name">{localName}</div>
        <div className="name">{name}</div>
      </div>
      <div className="rating">{rating}</div>
    </div>
  )
}

export default MovieItem;
