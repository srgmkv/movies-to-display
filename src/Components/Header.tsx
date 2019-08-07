import React from 'react'
import './Header.scss'
import Button from '../Containers/Button'
import { VisibilityFilters } from '../actions/filter-actions'

const Header = () => {
  return (
    <div className="header">

      <div className="filter">
        <div className="filter-by-year">
          by year
          <Button filter={VisibilityFilters.FILTER_BY_YEAR_ASC}>
            Asc
          </Button>
          <Button filter={VisibilityFilters.FILTER_BY_YEAR_DESC}>
            Desc
          </Button>
        </div>
        <div className="filter-by-rating">
          by rating
          <Button filter={VisibilityFilters.FILTER_BY_RATING_ASC}>
            Asc
          </Button>
          <Button filter={VisibilityFilters.FILTER_BY_RATING_DESC}>
            Desc
          </Button>
        </div>
      </div>
    </div>

  )
}

export default Header
