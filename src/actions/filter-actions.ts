import { Action } from 'redux'

export const VisibilityFilters: IVisibilityFilters = {
  FILTER_BY_YEAR_ASC: 'FILTER_BY_YEAR_ASC',
  FILTER_BY_YEAR_DESC: 'FILTER_BY_YEAR_DESC',
  FILTER_BY_RATING_ASC: 'FILTER_BY_RATING_ASC',
  FILTER_BY_RATING_DESC: 'FILTER_BY_RATING_DESC'
}

export interface IVisibilityFilters {
  FILTER_BY_YEAR_ASC: 'FILTER_BY_YEAR_ASC',
  FILTER_BY_YEAR_DESC: 'FILTER_BY_YEAR_DESC',
  FILTER_BY_RATING_ASC: 'FILTER_BY_RATING_ASC',
  FILTER_BY_RATING_DESC: 'FILTER_BY_RATING_DESC'
}

export type IFilter = 'FILTER_BY_YEAR_ASC' | 'FILTER_BY_YEAR_DESC'
  | 'FILTER_BY_RATING_ASC' | 'FILTER_BY_RATING_DESC'

export interface IActionSetVisibilityFilter extends Action {
  type: 'SET_VISIBILITY_FILTER'
  filter: IFilter
}

export function setVisibilityFilter(filter: IFilter): IActionSetVisibilityFilter {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}
