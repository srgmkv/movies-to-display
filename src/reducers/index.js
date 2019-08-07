import { combineReducers } from 'redux'
import {moviesList, fetchingStatus} from './fetchingResults'
import sortingType from './sortingType'
import modal from './modalStatus'

export default combineReducers({
  moviesList,
  fetchingStatus,
  sortingType,
  modal
})