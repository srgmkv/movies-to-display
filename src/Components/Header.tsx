import React from 'react'
import './Header.scss'
import Button from '../Containers/Button'
import { SortingActions } from '../actions/sorting-actions'

const Header = () => {
  return (
    <div className="header">

      <div className="sort">
        Сортировка
        <div className="sort-by-year">
          по году:
          <Button sort={SortingActions.SORT_BY_YEAR_ASC}>
            Фыс
          </Button>
          <Button sort={SortingActions.SORT_BY_YEAR_DESC}>
            Desc
          </Button>
        </div>
        <div className="sort-by-rating">
          по рейтингу:
          <Button sort={SortingActions.SORT_BY_RATING_ASC}>
            Asc
          </Button>
          <Button sort={SortingActions.SORT_BY_RATING_DESC}>
            Desc
          </Button>
        </div>
      </div>
    </div>

  )
}

export default Header
