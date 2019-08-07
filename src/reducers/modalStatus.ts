import { IActionModal } from '../actions/modal-actions'

interface ModalState {
  isShown: boolean,
  id: number | null
}
const initState = {
  isShown: false,
  id: null
}
const modal = (state: ModalState = initState, action: IActionModal): ModalState => {
  switch (action.type) {
    case 'SHOW_MODAL':
      return { isShown: true, id: action.id }
    case 'HIDE_MODAL':
      return { isShown: false, id: null}
    default:
      return state
  }
}

export default modal