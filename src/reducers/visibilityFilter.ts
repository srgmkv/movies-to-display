import { VisibilityFilters, IActionSetVisibilityFilter, IFilter } from '../actions/filter-actions'

const visibilityFilter = (state: IFilter = VisibilityFilters.FILTER_BY_YEAR_ASC, action: IActionSetVisibilityFilter): IFilter => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter