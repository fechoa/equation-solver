import React from 'react'
import styled from 'styled-components'

const StyledDescriptionHeader = styled.p`
	font-family: 'Source Sans Pro';
	font-style: normal;
	
	margin: 0;
	padding: 0;
	
	@media screen and (max-width: 1200px) {
		font-weight: 600;
		font-size: 14px;
		line-height: 16px;
	}
	@media screen and (min-width: 1200px) {
		max-width: 505px;
		font-weight: 400;
		font-size: 23px;
		line-height: 28px;
		margin-bottom: 51px;
	}
	transition: 1s ease;
	color: ${props => props.theme === "black" ? 'var(--gray)' : 'var(--black)'};
`

const DescriptionHeader = (props) => {
	return (
		<StyledDescriptionHeader theme={props.theme} className={props.className}>{props.textDescription}</StyledDescriptionHeader>
	)
}

export default DescriptionHeader