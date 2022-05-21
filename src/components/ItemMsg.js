import React from 'react'
import styled, { keyframes } from 'styled-components'

const StyledItemMsg = styled.div`
	display: flex;
	position: relative;
	word-wrap: break-word;
	max-width: 90%;
  
	@media screen and (max-width: 1200px) {
		border-radius: 34px;
		padding-top: 20px;
		padding-left: 20px;
		padding-bottom: 20px;
		padding-right: 70px;
	}
	@media screen and (min-width: 1200px) {
		border-radius: 59px;
		padding-top: 35px;
		padding-left: 35px;
		padding-bottom: 35px;
		padding-right: 100px;
	}

	p:not(:last-child) {
		white-space: pre-wrap;
		font-family: 'Source Sans Pro';
		font-style: normal;
		font-weight: 600;
		line-height: 100%;

		margin: 0;
		padding: 0;

		@media screen and (max-width: 1200px) {
			font-size: 13px;
		}
		@media screen and (min-width: 1200px) {
			font-size: 23px;
		}

		color: var(--black);
	}

	p:last-child {
		display: inline-block;
		position: absolute;
		margin: 0;
		padding: 0;

		font-family: 'Source Sans Pro';
		font-style: normal;
		font-weight: 400;
		line-height: 100%;			
		color: #A8A8A7;

		@media screen and (max-width: 1200px) {
			right: 20px;
			bottom: 8px;
			font-size: 12px;
		}
		@media screen and (min-width: 1200px) {
			right: 35px;
			bottom: 20px;
			font-size: 18px;
		}
		
	}

	justify-self: flex-end;

	&.userMsg {
		align-self: flex-end;
		border-bottom-right-radius: 0;
		background-color: var(--msg_user);
	}

	&.serviceMsg {
		align-self: flex-start;
		border-top-left-radius: 0;
		background-color: var(--msg_service);
	}
`

const ItemMsg = (props) => {
	return (
		<StyledItemMsg {...props}>
			<p>{props.text}</p>
			<p>{props.time}</p>
		</StyledItemMsg>
	)
}

export default ItemMsg