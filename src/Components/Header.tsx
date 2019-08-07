import React from 'react'
import './Header.scss'
import Button from '../Containers/Button'
import { SortingActions } from '../actions/sorting-actions'

type Modal = {modalStatus: boolean}

const Header = ({ modalStatus }: Modal) => {
  const status = modalStatus ? ' disabled' : ''
  return (
    <div className={`header${status}`}>

      <div className="sort">
        <span className="sorting-span">Сортировка</span>
        <div className="sort-by-year">

          <span>по году:</span>
          <Button sort={SortingActions.SORT_BY_YEAR_ASC}>

          </Button>
          <Button sort={SortingActions.SORT_BY_YEAR_DESC}>

          </Button>
        </div>
        <div className="sort-by-rating">
          <span>по рейтингу:</span>
          <Button sort={SortingActions.SORT_BY_RATING_ASC}>

          </Button>
          <Button sort={SortingActions.SORT_BY_RATING_DESC}>

          </Button>
        </div>
      </div>
    </div>

  )
}

export default Header