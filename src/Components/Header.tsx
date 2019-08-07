import React from 'react'
import './Header.scss'
import Button from '../Containers/Button'
import { SortingActions } from '../actions/sorting-actions'
import Image from '../Images/github2.svg'

const Header = () => {
  return (
    <div className="header">
      <a href="https://github.com/srgmkv" title="github.com/srgmkv">
        <img src={Image} alt="" />
      </a>
      <div className="sort">
        <div className="header-name-cont">
          <div className="header-name">Сортировать</div>
        </div>

        <div className="sort-by">

          <div>по году:</div>
          <div className="buttons">
            <Button sort={SortingActions.SORT_BY_YEAR_ASC} />
            <Button sort={SortingActions.SORT_BY_YEAR_DESC} />
          </div>
        </div>
        <div className="sort-by">
          <div>по рейтингу:</div>
          <div className="buttons">
            <Button sort={SortingActions.SORT_BY_RATING_ASC} />
            <Button sort={SortingActions.SORT_BY_RATING_DESC} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header