import React from 'react'
import { connect } from 'react-redux'
import { setVisibilityFilter, IFilter } from '../actions/filter-actions'
import { IState } from '../interfaces'

interface Props extends OwnProps{
  active?: boolean
  onClick?: any
  }
interface OwnProps {
  children: React.ReactNode | string
  filter: IFilter
}


const Button = ({ active, onClick, children }:Props ) => {
  const selected = active ? ' selected' : ''
  return (
    <div className={"filter-button" + selected}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

const mapStateToProps = (state: IState, ownProps: OwnProps): { active: boolean } => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch: any, ownProps: OwnProps): any => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)