import { SortingActions, IActionsetSortingType, ISort } from '../actions/sorting-actions'

const sortingType = (state: ISort = SortingActions.SORT_BY_YEAR_ASC, action: IActionsetSortingType): ISort => {
  switch (action.type) {
    case 'SET_SORT_TYPE':
      return action.sort
    default:
      return state
  }
}

export default sortingType