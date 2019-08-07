import { ISort } from './actions/sorting-actions'

export interface IState {
  moviesList: IMovieItem[]
  fetchingStatus: IFetchingStatus
  sortingType: ISort
}

export interface IFetchingStatus {
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