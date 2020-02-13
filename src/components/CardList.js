import React from 'react'
import styled from '@emotion/styled'

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 50px auto;
  &::after {
    content: '';
    flex: 0 0 32%;
  }
`

const CardList = props => {
  return <List>{props.children}</List>
}

export default CardList
