export const SortingActions: SortingActions = {
  SORT_BY_YEAR_ASC: 'SORT_BY_YEAR_ASC',
  SORT_BY_YEAR_DESC: 'SORT_BY_YEAR_DESC',
  SORT_BY_RATING_ASC: 'SORT_BY_RATING_ASC',
  SORT_BY_RATING_DESC: 'SORT_BY_RATING_DESC'
}

export interface SortingActions {
  SORT_BY_YEAR_ASC: 'SORT_BY_YEAR_ASC',
  SORT_BY_YEAR_DESC: 'SORT_BY_YEAR_DESC',
  SORT_BY_RATING_ASC: 'SORT_BY_RATING_ASC',
  SORT_BY_RATING_DESC: 'SORT_BY_RATING_DESC'
}

export type Sort = 'SORT_BY_YEAR_ASC' | 'SORT_BY_YEAR_DESC'
  | 'SORT_BY_RATING_ASC' | 'SORT_BY_RATING_DESC'

export interface IActionSetSortingType {
  type: 'SET_SORT_TYPE'
  sort: Sort
}

export function setSortingType(sort: Sort): IActionSetSortingType {
  return {
    type: 'SET_SORT_TYPE',
    sort
  }
}
