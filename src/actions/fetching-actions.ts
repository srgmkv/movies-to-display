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

export function getMoviesData(): any {
  return (dispatch: any) => {
    dispatch(dataRequested())

    const url = "https://s3-eu-west-1.amazonaws.com/sequeniatesttask/films.json"
    const backupUrl = "https://raw.githubusercontent.com/srgmkv/movies-to-display/master/public/films-backup.json"

    //запрашиваем данные с url, если ошибка, то с backupUrl, если ошибка, то обрабатываем ее/записываем,
    axios(url)
      .then((payload: any) => dispatch({ type: 'DATA_LOADED', payload }))
      .catch((err: any) => {
        axios(backupUrl).then((payload: any) => dispatch({ type: 'DATA_LOADED', payload }))
        return dispatch({ type: 'SERVER_ERRORED', errorData: err })
      })
  }
}