import { SortingActions, IActionSetSortingType, Sort } from '../actions/sorting-actions'

const sortingType = (state: Sort = SortingActions.SORT_BY_YEAR_ASC, action: IActionSetSortingType): Sort => {
  switch (action.type) {
    case 'SET_SORT_TYPE':
      return action.sort
    default:
      return state
  }
}

export default sortingType