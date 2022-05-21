import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const StyledButtonBack = styled(NavLink)`
	background-color: transparent;
	@media screen and (max-width: 1200px) {
		width: 61px;
		height: 61px;
		background-image: url('./arrow_back_m.svg');
	}
	@media screen and (min-width: 1200px) {
		width: 96px;
		height: 96px;
		background-image: url('./arrow_back.svg');
		&:hover {
			transform: scale(1.15);
		}
	}
	transition: 1s ease-in;
`

const ButtonBack = (props) => {
  return (
	<StyledButtonBack to='/' {...props}/>
  )
}

export default ButtonBack