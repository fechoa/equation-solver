import React from 'react'
import styled from 'styled-components'

const StyledTitleHeader = styled.h1`
	font-family: 'Source Sans Pro';
	font-weight: 400;
	font-style: normal;

	padding: 0;
	margin: 0;

	@media screen and (max-width: 1200px) {
		font-size: 32px;
		line-height: 34px;
		margin-bottom: 24px;
	}

	@media screen and (min-width: 1200px) {
		max-width: 540px;
		font-size: 56px;
		line-height: 58px;
		margin-bottom: 33px;
	}
	transition: 1s ease;
	color: ${props => { return props.theme === 'black' ? 'var(--white)' : 'var(--black)' }};
`

const TitleHeader = (props) => {
	return (
		<StyledTitleHeader {...props}>{props.textTitle}</StyledTitleHeader>
	)
}


export default TitleHeader