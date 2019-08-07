import { Action } from 'redux'

export type IActionModal = IActionShowModal | IActionHideModal

interface IActionShowModal extends Action {
  type: 'SHOW_MODAL'
  id: number
}

interface IActionHideModal extends Action {
  type: 'HIDE_MODAL'
}

export function showModal(id: number): IActionShowModal {
  return {
    type: 'SHOW_MODAL',
    id
  }
}

export function hideModal(): IActionHideModal {
  return {
    type: 'HIDE_MODAL'
  }
}