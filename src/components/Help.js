import React, { useEffect } from 'react'
import styled, { css } from 'styled-components'
import ButtonBack from './modules/ButtonBack'

const StyledHelp = styled.main`
	position: relative;

	display: flex;
	flex-direction: column;
	border: 1px solid ${props => { return props.theme === 'white' ? 'var(--black)' : 'var(--white)'}};
	transition: 2s ease;
	@media screen and (max-width: 1200px) {
		min-height: 440px;
		margin-right: 11px;
		margin-left: 11px;
		padding-top: 21px;
		padding-left: 21px;
		padding-right: 32px;
		padding-bottom: 30px;
		border-radius: 32px;
	}
	
	@media screen and (min-width: 1200px) {
		height: 800px;
		width: 100%;
		padding-top: 39px;
		padding-left: 39px;
		padding-right: 30px;

		border-radius: 48px;
	}

	a {
		transition: 2s ease;
		@media screen and (max-width: 1200px) {
			margin-bottom: 30px;
		}
		@media screen and (min-width: 1200px) {
			margin-bottom: 80px;
		}
	}

	ol {
		margin: 0;
		padding: 0;

		font-family: 'Source Sans Pro';
		font-style: normal;
		font-weight: 400;

		transition: 2s ease;

		@media screen and (max-width: 1200px) {
			font-size: 17px;
			line-height: 32px;
			padding-left: 20px;
			padding-right: 25px;
		}
		@media screen and (min-width: 1200px) {
			font-size: 25px;
			line-height: 47px;
			padding-left: 87px;
			padding-right: 25px;
		}

		li {
			margin: 0;
			padding: 0;
			transition: 2s ease;
			color: ${props => { return props.theme === 'white' ? 'var(--black)' : 'var(--white)' }};
			span {
				transition: 2s ease;
				color: ${props => { return props.theme === 'white' ? 'var(--white)' : 'var(--black)' }};
				&.first {
					background-color: var(--blue);
				}
				&.second {
					background-color: var(--orange);
				}
				&.last {
					background-color: var(--blackTrans);
				}

				@media screen and (max-width: 1200px) {
					border-radius: 3px;
					padding-left: 1px;;
					padding-right: 1px;
				}
				@media screen and (min-width: 1200px) {
					border-radius: 4px;
					padding-left: 6px;;
					padding-right: 6px;
				}				
			}

		}
	}
`

const Help = (props) => {
	const {changeTitle, changeDescr, changeHelp, ...rest} = props;
	useEffect(() => {
		changeTitle('Помощь');
		changeDescr('');
		changeHelp(true);
	  }, []);

	return (
		<StyledHelp {...rest}>
			<ButtonBack {...rest}/>
			<ol>
				<li>Программа не умеет работать со сложным синтаксисом, поэтому вниматель посмотри на пример:  <br/><span className='first'>5 * X^0 + 4 * X^1 - 9.3 * X^2 = 1 * X^0</span></li>
				<li>Если сервис длительное время не отвечает: <br/><span className='second'>Перезагрузи страницу</span></li>
				<li>Чат-решатель подскажет на что обратить внимание, если ты отправил ему уравнение: <br/><span className='last'>Некорректно</span></li>
			</ol>
		</StyledHelp>
	)
}

export default Help