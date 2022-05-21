import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const StyledItem = styled(NavLink)`
	overflow: hidden;
	position: relative;
	z-index: 10;
	background: linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), ${props => props.color};
	border: none;
	text-decoration: none;
	transition: 1s ease-in-out;
	@media screen and (max-width: 1200px) {
		padding-top: ${props => { return props.bg === 'top' ? '120px' : '118px'}};
		border-top-left-radius: ${props => { return props.bg === 'top' ? '48px' : '0px'}};
		border-top-right-radius: ${props => { return props.bg === 'top'? '48px' : '0px'}};
		border-bottom-left-radius: ${props => { return props.bg === 'bot' ? '48px' : '0px'}};
		border-bottom-right-radius: ${props => { return props.bg === 'bot' ? '48px' : '0px'}};
		height: 240px;
		width: 100%;
	}
	@media screen and (min-width: 1200px) {
		padding-top: ${props => { return props.bg === 'top' ? '230px' : '225px'}};
		border-top-left-radius: ${props => { return props.bg === 'top' ? '32px' : '0px'}};
		border-top-right-radius: ${props => { return props.bg === 'top' ? '32px' : '0px'}};
		border-bottom-left-radius: ${props => { return props.bg === 'bot' ? '32px' : '0px'}};
		border-bottom-right-radius: ${props => { return props.bg === 'bot' ? '32px' : '0px'}};
		width: 100%;
		height: 474px;	
		&:hover {
			z-index: 911;
			transform: scale(1.005);
			.title {
				font-size: 63px;
			}
			.bg {
				transform: scale(1.205);
			}
		}	
	}

	p {
		margin: 0;
		padding: 0;
	}
	
	.title {
		font-family: 'Source Sans Pro';
		font-style: normal;
		color: var(--white);
		font-weight: 600;
		transition: 1s ease-in-out;	
		
		@media screen and (max-width: 1200px) {
			padding-left: 20px;
			margin-bottom: 25px;
			font-size: 28px;
			line-height: 34px;
		}
		@media screen and (min-width: 1200px) {
			font-size: 48px;
			line-height: 68px;
			padding-left: 40px;
			margin-bottom: 10px;
		}
	}
	
	.description {
		font-family: 'Source Sans Pro';
		font-style: normal;
		font-weight: 400;
		color: var(--gray);
		transition: 1s ease-in-out;

		@media screen and (max-width: 1200px) {
			padding-left: 20px;
			font-size: 12px;
			line-height: 15px;
		}
		@media screen and (min-width: 1200px) {
			max-width: 600px;
			padding-left: 40px;
			font-size: 24px;
			line-height: 30px;
		}
	}
	
	.bg {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		z-index: 3;
		background-size: contain;
		background-repeat: no-repeat;
		transition: 1s ease-in-out;

		@media screen and (max-width: 1200px) {
			&.top {
				width: 286px;
				height: 137px;				
				background-image: ${props => props.theme === 'black' ? `url('./topBg_m_black.svg')` : `url('./topBg_m.svg')`};
			}
			&.bot {
				width: 305px;
				height: 132px;			
				background-image: ${props => props.theme === 'black' ? `url('./botBg_m_black.svg')` : `url('./botBg_m.svg')`};	
			}
		}
		@media screen and (min-width: 1200px) and (max-width: 1350px) {
			&.top {
				width: 453px;
				height: 156px;
				background-image: ${props => props.theme === 'black' ? `url('./topBg_d_black.svg')` : `url('./topBg_d.svg')`};
			}
			&.bot {
				width: 521px;
				height: 214px;				
				background-image: ${props => props.theme === 'black' ? `url('./botBg_d_black.svg')` : `url('./botBg_d.svg')`};	
			}
		}
		@media screen and (min-width: 1350px) {
			&.top {
				width: 573px;
				height: 275px;				
				background-image: ${props => props.theme === 'black' ? `url('./topBg_d_black.svg')` : `url('./topBg_d.svg')`};
			}
			&.bot {
				width: 611px;
				height: 264px;				
				background-image: ${props => props.theme === 'black' ? `url('./botBg_d_black.svg')` : `url('./botBg_d.svg')`};	
			}
		}
	}
	
`


const Item = (props) => {
	let color = props.bg === 'top' ? 'var(--blue)' : 'var(--blackTrans)';
	if (props.theme === 'white' && props.bg === 'bot') color = 'var(--black)';
	return (
		<StyledItem to={props.path} color={color} {...props}>
			<p className='title'>{props.text}</p>
			<p className='description'>{props.description}</p>
			<div className={'bg ' + props.bg}></div>
		</StyledItem>
	)
}

export default Item