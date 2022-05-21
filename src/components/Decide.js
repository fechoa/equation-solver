import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ButtonBack from './modules/ButtonBack'
import ListMsg from './ListMsg'
import ItemMsg from './ItemMsg'
import InputBar from './InputBar'
import WrapperList from './WrapperList'

import * as Calc from '../calc/calculations'
import * as Utilities from '../calc/utilities'


const StyledDecide = styled.main`
	position: relative;

	display: flex;
	flex-direction: column;
	background: linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), var(--white);
	box-shadow: ${props => { return props.theme === 'white' ? '1px 12px 22px -8px rgba(0, 0, 0, 0.44)' : 'none'}};
	transition: 2s ease;
	@media screen and (max-width: 1200px) {
		padding-top: 21px;
		padding-bottom: 30px;
		padding-left: 21px;
		padding-right: 21px;
		min-height: 478px;
		margin-left: 11px;
		margin-right: 11px;
		
		border-radius: 48px;
	}
	
	@media screen and (min-width: 1200px) {
		padding-top: 33px;
		padding-left: 33px;
		padding-right: 33px;
		padding-bottom: 48px;
		height: 800px;
		width: 900%;
		border-radius: 32px;
	}

	a {
		transition: 2s ease;
	}
	transition: 2s ease-in;
`

const Decide = (props) => {
	const [msgs, setMsgs] =  useState(localStorage.getItem('msgs') ? JSON.parse(localStorage.getItem('msgs')) : []);
	const [inputMsg, setInputMsg] = useState('');	

	const changeInput = (event) => {
		setInputMsg(event.target.value);
	}

	const addDataToLocalSt = data => {
		const msgsJSON = JSON.stringify(data);
		localStorage.setItem('msgs', msgsJSON);
	}

	const scrollElementToEnd = className => {
		const element = document.querySelector(`${className}`);
		element.scrollTop = element.scrollHeight;
	}

	const createDataElem = (text, time, user) => {
		return {text, time: time(), user};
	}

	const createNewDataMsgs = (prevState, newElement) => {
		const data = [...prevState, newElement];
		addDataToLocalSt(data);
		setInputMsg('');
		return data;
	}

	const addNewMsg = () => {
		if (inputMsg.length > 0) {
			const element = createDataElem(inputMsg, Utilities.timeNewMsg, true);
			setMsgs(prevState => createNewDataMsgs(prevState, element));
			
			const answer = Calc.getAnswerData(element);
			setMsgs(prevState => createNewDataMsgs(prevState, answer));
		}
	}

	const addNewMsgBtn = (event) => {
		if (inputMsg.length > 0 && event.keyCode === 13) {
			const element = createDataElem(inputMsg, Utilities.timeNewMsg, true);
			setMsgs(prevState => createNewDataMsgs(prevState, element));
			
			const answer = Calc.getAnswerData(element);
			setMsgs(prevState => createNewDataMsgs(prevState, answer));
		}
	}

	const {changeTitle, changeDescr, changeHelp, ...rest} = props;
	useEffect(() => {
		changeTitle(`Решение уравнений`);
		changeDescr('После отправки сообщения в сервис,  ты получишь его сокращенную форму, степень, а так же количество корней и сами корни, если таковые сущесвуют');	
		changeHelp(false);
		scrollElementToEnd('.listMsg');
	}, [msgs]);


	return (
		<StyledDecide {...rest}>
			<ButtonBack {...rest}/>
			<WrapperList>
				<ListMsg className='listMsg'>
					{msgs.map((item, i) => {
						if (item.user) {
							return <ItemMsg key={+Date.now() + i} className='userMsg' time={item.time} text={item.text}/>;
						} else {
							return <ItemMsg key={+Date.now() + i} className='serviceMsg' time={item.time} text={item.text}/>;
						}
					})}
				</ListMsg>
				<InputBar msgs={msgs} addNewMsg={addNewMsg} addNewMsgBtn={addNewMsgBtn} input={inputMsg} changeInput={changeInput}/>
			</WrapperList>
		</StyledDecide>
	)
}

export default Decide