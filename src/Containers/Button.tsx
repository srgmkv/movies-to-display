import React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { setSortingType, Sort, IActionSetSortingType } from '../actions/sorting-actions'
import { AppState } from '../interfaces'
import UpImg from '../Images/up.svg'
import DownImg from '../Images/down.svg'
import UpRedImg from '../Images/up-red.svg'
import DownRedImg from '../Images/down-red.svg'

interface ButtonOwnProps {
  sort: Sort
}

interface ButtonStateProps extends ButtonOwnProps {
  active: boolean
}

interface ButtonDispatchProps {
  onClick: () => void
}

type ButtonProps = ButtonStateProps & ButtonDispatchProps

//Компонент кнопки сортировки
const Button = ({ active, sort, onClick }: ButtonProps) => {

  let ImgUrl: string; //здесь назначаем картинку кнопке сортировки
  if (!active && sort.endsWith('ASC')) {
    ImgUrl = UpImg
  } else if (!active && sort.endsWith('DESC')) {
    ImgUrl = DownImg
  } else if (active && sort.endsWith('ASC')) {
    ImgUrl = UpRedImg //если тип выбран, то кнопка красная
  } else {
    ImgUrl = DownRedImg //и здесь
  }

  const title = sort.endsWith('ASC') ? 'по возрастанию' : 'по убыванию'

  return (
    <div className={"sort-button"}
      onClick={onClick}
    >
      <img src={ImgUrl} alt='' title={title} />
    </div>
  )
}

const mapStateToProps = (state: AppState, ownProps: ButtonOwnProps): ButtonStateProps => ({
  active: ownProps.sort === state.sortingType,
  sort: ownProps.sort
})

const mapDispatchToProps = (dispatch: Dispatch<IActionSetSortingType>, ownProps: ButtonOwnProps): ButtonDispatchProps => ({
  onClick: () => dispatch(setSortingType(ownProps.sort))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)