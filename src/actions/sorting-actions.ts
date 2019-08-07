import { Action } from 'redux'

export const SortingActions: ISortingActions = {
  SORT_BY_YEAR_ASC: 'SORT_BY_YEAR_ASC',
  SORT_BY_YEAR_DESC: 'SORT_BY_YEAR_DESC',
  SORT_BY_RATING_ASC: 'SORT_BY_RATING_ASC',
  SORT_BY_RATING_DESC: 'SORT_BY_RATING_DESC'
}

export interface ISortingActions {
  SORT_BY_YEAR_ASC: 'SORT_BY_YEAR_ASC',
  SORT_BY_YEAR_DESC: 'SORT_BY_YEAR_DESC',
  SORT_BY_RATING_ASC: 'SORT_BY_RATING_ASC',
  SORT_BY_RATING_DESC: 'SORT_BY_RATING_DESC'
}

export type ISort = 'SORT_BY_YEAR_ASC' | 'SORT_BY_YEAR_DESC'
  | 'SORT_BY_RATING_ASC' | 'SORT_BY_RATING_DESC'

export interface IActionSetSortingType extends Action {
  type: 'SET_SORT_TYPE'
  sort: ISort
}

export function setsortingType(sort: ISort): IActionSetSortingType {
  return {
    type: 'SET_SORT_TYPE',
    sort
  }
}
