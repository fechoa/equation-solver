import React, { useRef } from 'react'
import styled from 'styled-components'

const StyledInputBar = styled.div`
	display: flex;

	@media screen and (max-width: 1200px) {
		height: 48px;
		width: 100%;
	}
	@media screen and (min-width: 1200px) {
		height: 96px;
		width: 100%;
	}

	input {
		font-family: 'Source Sans Pro';
		font-style: normal;
		font-weight: 400;
		color: var(--black);

		
		margin: 0;
		padding: 0;
		
		box-sizing: border-box;
		
		border: none;
		outline: none;
		background-color: #F5F7F2;
		padding-left: 28px;
		padding-right: 28px;
		
		flex-grow: 1;

		@media screen and (max-width: 1200px) {
			border-radius: 22px;

			font-size: 12px;
			line-height: 15px;
			margin-right: 12px;
		}
		@media screen and (min-width: 1200px) {
			border-radius: 69px;

			font-size: 23px;
			line-height: 100%;
			margin-right: 25px;
		}

		&:placeholder-shown {
			font-style: inherit;
			font-weight: inherit;
			color: #A8A8A7;
		}		
	}
	input:focus {
		border: 1px solid #D4D8F5;
	}

	button {
		cursor: pointer;
		border: none;
		background-color: var(--blue);
		background-repeat: no-repeat;
		background-position: center;
		background-image: url('./arrow_send.svg');
		
		@media screen and (max-width: 1200px) {
			width: 48px;
			height: 48px;
			border-radius: 50%;
			background-size: 20px 20px;
			
		}
		@media screen and (min-width: 1200px) {
			width: 96px;
			height: 96px;
			border-radius: 69px;
			background-size: 34px 34px;
			transition: 1s ease;
			&:hover {
				transform: translateY(-5px);
			}
		}			
	}
`

const useFocus = () => {
	const htmlElRef = useRef(null)
	const setFocus = () => {htmlElRef.current && htmlElRef.current.focus()}

	return [ htmlElRef, setFocus ] 
}

const InputBar = (props) => {
	const [inputRef, setFocus] = useFocus();
	const handleEventButton = event => {
		props.addNewMsg(event);
		if (window.screen.width > 1200) {
			setFocus();
		}
	}

	return (
		<StyledInputBar>
			<input ref={inputRef} onKeyDown={props.addNewMsgBtn} onChange={props.changeInput} value={props.input} placeholder='Type a message'/>
			<button onClick={handleEventButton}></button>
		</StyledInputBar>
	)
}

export default InputBar