import { combineReducers } from 'redux'
import {moviesList, fetchingStatus} from './fetchingResults'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  moviesList,
  fetchingStatus,
  visibilityFilter
})