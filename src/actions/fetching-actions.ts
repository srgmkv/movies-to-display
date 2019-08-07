import axios from 'axios'
import { Action } from 'redux'

export interface IActionDataRequested extends Action {
  type: 'DATA_REQUESTED'
}

export interface IActionDataLoaded extends Action {
  type: 'DATA_LOADED'
  payload: any
}

export interface IActionServerErrored extends Action {
  type: 'SERVER_ERRORED'
  errorData: any
}

export type IFetchingActions = IActionDataRequested | IActionServerErrored | IActionDataLoaded;

export function dataRequested(): IActionDataRequested {
  return { type: 'DATA_REQUESTED' }
}

export function getMoviesData():any {
  return (dispatch: any) => {
    dispatch(dataRequested())

    axios("https://s3-eu-west-1.amazonaws.com/sequeniatesttask/films.json")
      .then((payload: any) => dispatch({ type: 'DATA_LOADED', payload }))
      .catch((err: any) => dispatch({ type: 'SERVER_ERRORED', errorData: err }))
  }
}