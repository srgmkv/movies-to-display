import React from 'react'
import { connect } from 'react-redux'
import { setSortingType, ISort } from '../actions/sorting-actions'
import { IState } from '../interfaces'
import UpImg from '../Images/up.svg'
import DownImg from '../Images/down.svg'
import UpRedImg from '../Images/up-red.svg'
import DownRedImg from '../Images/down-red.svg'

interface Props extends OwnProps {
  active?: boolean
  onClick?: any
}
interface OwnProps {
  sort: ISort
}

//Компонент кнопки сортировки
const Button = ({ active, sort, onClick }: Props) => {

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

const mapStateToProps = (state: IState, ownProps: OwnProps): { active: boolean, sort: ISort } => ({
  active: ownProps.sort === state.sortingType,
  sort: ownProps.sort
})

const mapDispatchToProps = (dispatch: any, ownProps: OwnProps): any => ({
  onClick: () => dispatch(setSortingType(ownProps.sort))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)