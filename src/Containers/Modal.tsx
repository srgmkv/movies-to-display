import React, { Component } from 'react'
//import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import { IState, IMovieItem } from '../interfaces'
import { connect } from 'react-redux'
import { hideModal } from '../actions/modal-actions'

interface IHideModal extends IModal {
  hideModal: typeof hideModal
}

interface IModal {
  moviesList: IMovieItem[]
  id: number | null
}

const Modal = ({ moviesList, id, hideModal }: IHideModal) => {
  const [movieItem] = moviesList.filter(item => item.id === id)
  console.log('movieItem', movieItem)


  return (
    <div className="modal">MODAL
    <div onClick={hideModal}>Close</div>
    </div>
  )
}

const mapStateToProps = (state: IState): IModal => ({
  moviesList: state.moviesList,
  id: state.modal.id
})
export default connect(mapStateToProps, { hideModal })(Modal)