import { Sort } from './actions/sorting-actions'

export interface AppState {
  moviesList: IMovieItem[]
  fetchingStatus: FetchingStatus
  sortingType: Sort
  modal: IModal
}

interface IModal {
  isShown: boolean
  id: number | null
}

export interface FetchingStatus {
  isLoading: boolean
  errMessage: string
}

export interface IMovieItem {
  description: string
  genres: string[]
  id: number
  image_url: string
  localized_name: string
  name: string
  rating: number
  year: number
}