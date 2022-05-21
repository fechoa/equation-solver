import React from 'react'
import styled from 'styled-components'


const StyledWrapper = styled.div`
	display: flex;
	margin: 0 auto;
	
	@media screen and (max-width: 1200px) {
		max-width: 600px;
		flex-direction: column;
		padding-top: 30px;
		padding-bottom: 35px;
	}
	@media screen and (min-width: 1200px) {
		max-width: 1600px;
		flex-direction: row;
		padding-top: 82px;
		padding-right: 22px;
		padding-left: 81px;
		padding-bottom: 30px;
	}
	transition: 2s ease;
	background-color: ${props => { return props.theme === 'black' ? 'var(--black)' : 'var(--white)'}};
`

const Wrapper = (props) => {
	return (
		<StyledWrapper {...props}>{props.children}</StyledWrapper>
	)
}

export default Wrapper