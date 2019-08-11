import { IFetchingActions } from '../actions/fetching-actions'
import { IMovieItem, FetchingStatus } from '../interfaces'

export const moviesList = (state: IMovieItem[] = [], action: IFetchingActions): IMovieItem[] => {
  switch (action.type) {
    case 'DATA_LOADED':
      return action.payload.data.films

    default:
      return state
  }
}

const initFetchingStatus: FetchingStatus = {
  isLoading: false,
  errMessage: ''
}

export const fetchingStatus = (state: FetchingStatus = initFetchingStatus, action: IFetchingActions): FetchingStatus => {
  switch (action.type) {

    case 'DATA_REQUESTED':
      return {
        errMessage: '',
        isLoading: true
      }
    case 'DATA_LOADED':
      return {
        errMessage: '',
        isLoading: false
      }
    case 'SERVER_ERRORED':
      return {
        isLoading: false,
        errMessage: action.errorData.message
      }

    default:
      return state
  }
}