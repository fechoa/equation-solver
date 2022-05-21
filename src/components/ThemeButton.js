import React from 'react'
import styled from 'styled-components'


const StyledThemeButton = styled.button`
	position: relative;
	
	width: 125px;
	height: 50px;
	cursor: pointer;
	background: transparent;
	border: 1px solid ${props => { return props.theme === 'black' ? 'var(--white)' : 'var(--black)'}};

	outline: none;
	transition: 1s ease-in-out;

	svg {
		position: absolute;
		left: 0;
		top: 0;
		fill: none;
		stroke: var(--black);
		stroke-dasharray: 150 480;
		stroke-dashoffset: 150;
		transition: 1s ease-in-out;
	}

	&:hover {
		transition: 1s ease-in-out;
		background: ${props => { return props.theme === 'black' ? 'var(--white)' : 'var(--black)'}};
	}

	&:hover span {
		color: ${props => { return props.theme === 'black' ? 'var(--black)' : 'var(--white)'}};
		transition: 1s ease-in-out;
	}

	&:hover svg {
		stroke-dashoffset: -480;
	}

	span {
		font-family: 'Source Sans Pro';
		font-style: normal;
		font-weight: 600;
		font-size: 23px;
		line-height: 100%;
		color: ${props => { return props.theme === 'black' ? 'var(--white)' : 'var(--black)'}};
	}

	@media screen and (max-width: 1200px) {
		display: none;
	}

`

const ThemeButton = ({text, theme, onChangeTheme}) => {
	return (
		<StyledThemeButton onClick={onChangeTheme} theme={theme}>
		    <svg width="125px" height="50px" viewBox="0 0 125 50" className="border">
          	<polyline points="124,1 124,49 1,49 1,1 124,1" className="bg-line" />
          	<polyline points="124,1 124,49 1,49 1,1 124,1" className="hl-line" />
        	</svg>
			<span>{text}</span>
		</StyledThemeButton>
	)
}

export default ThemeButton