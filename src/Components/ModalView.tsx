import React from 'react'
import { IMovieItem } from '../interfaces'
import './Modal.scss'
import { Link } from 'react-router-dom'


interface ModalProps {
  item: IMovieItem
}

//Модальное окно, вызывается кликом по фильму в списке с информацией о фильме 
const Modal = (props: ModalProps) => {

  const { description, name, localized_name, year, rating, image_url } = props.item

  return (
   
        <div className="overlay">
          <div className="modal" onClick={(e) => e.preventDefault()}>
            <div className="header">
              <Link to="/"><div className="back" /></Link>
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

export default Modal