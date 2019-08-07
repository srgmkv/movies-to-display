import React from 'react'
import { connect } from 'react-redux'
import { setsortingType, ISort } from '../actions/sorting-actions'
import { IState } from '../interfaces'

interface Props extends OwnProps{
  active?: boolean
  onClick?: any
  }
interface OwnProps {
  children: React.ReactNode | string
  sort: ISort
}


const Button = ({ active, onClick, children }:Props ) => {
  const selected = active ? ' selected' : ''
  return (
    <div className={"sort-button" + selected}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

const mapStateToProps = (state: IState, ownProps: OwnProps): { active: boolean } => ({
  active: ownProps.sort === state.sortingType
})

const mapDispatchToProps = (dispatch: any, ownProps: OwnProps): any => ({
  onClick: () => dispatch(setsortingType(ownProps.sort))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)