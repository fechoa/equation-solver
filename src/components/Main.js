import React, { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import styled, { css } from 'styled-components'

import Item from './Item'

const StyledMain = styled.main`
	position: relative;

	display: flex;
	flex-direction: column;

	${props => props.theme === 'white' && css`
		filter: drop-shadow(5px 10px 20px rgba(0, 0, 0, 0.25));
	`}

	@media screen and (max-width: 1200px) {
		height: 440px;
		padding-left: 11px;
		padding-right: 11px;
	}
	
	@media screen and (min-width: 1200px) {
		height: 800px;
		width: 100%;
	}

	.bgMain {
		@media screen and (max-width: 1200px) {
			display: none;
		}
	
		@media screen and (min-width: 1200px) {
			position: absolute;
			content: '';
			top: 600px;
			left: -600px;
			width: 516px;
			height: 329px;
			background-image: url('./bg_d.svg');
			background-size: cover;
		}
	}
`

const Main = (props) => {
	const {changeTitle, changeDescr, changeHelp, ...rest} = props;
	useEffect(() => {
		changeTitle('Могу решить для тебя немного уравнений');
		changeDescr('Правда я умею не так много как светлые человеческие головы, но все же, я надеюсь, что мои возможности помогут тебе с рутинными задачами в столь нелегкий час');
		changeHelp(false);
	  }, []);

	return (
		<StyledMain {...rest}>
			<Item path={'/decide'} theme={props.theme} href={'/decide'} bg={'top'} text={'Решить уравнение'} description={'Найти корни, узнать вычислимость и степень полинома'}/>
			<Item path={'/help'} theme={props.theme} href={'/help'} bg={'bot'} text={'Помощь'} description={'Узнать в каком формате подается уравнение'}/>
			<div onChange={props.onChangeTheme} className={'bgMain'}></div>
		</StyledMain>
	)
}

export default Main