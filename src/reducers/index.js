import { combineReducers } from 'redux'
import {moviesList, fetchingStatus} from './fetchingResults'
import sortingType from './sortingType'

export default combineReducers({
  moviesList,
  fetchingStatus,
  sortingType
})