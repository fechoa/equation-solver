import React from 'react'
import styled from 'styled-components'

const StyledListMsg = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	overflow: scroll;
	position: relative;

	div:first-child {
		margin-top: auto;
	}

	::-webkit-scrollbar {
		display: none;
	}

	@media screen and (max-width: 1200px) {
		padding-top: 10px;
		margin-bottom: 30px;
	}
	@media screen and (min-width: 1200px) {
		height: 575px;
		width: 100%;
		padding-top: 24px;
		margin-bottom: 70px;
	}

	div:not(:last-child) {
		@media screen and (max-width: 1200px) {
			margin-bottom: 15px;
		}
		@media screen and (min-width: 1200px) {
			margin-bottom: 30px;
		}
	}
`


const ListMsg = (props) => {
	return (
		<StyledListMsg {...props}>{props.children}</StyledListMsg>
	)
}

export default ListMsg