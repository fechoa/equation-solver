import React from 'react'
import styled from 'styled-components'

const StyledWrapperList = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	position: relative;
	overflow: scroll;

	@media screen and (max-width: 1200px) {
		padding-top: 5px;
		height: 371px;
	}
	@media screen and (min-width: 1200px) {
		height: 600px;
		padding-top: 10px;
	}
`


const WrapperList = (props) => {
	return (
		<StyledWrapperList>{props.children}</StyledWrapperList>
	)
}

export default WrapperList