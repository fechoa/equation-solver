import React from 'react'
import styled from 'styled-components'
import TitleHeader from './TitleHeader'
import DescriptionHeader from './DescriptionHeader'
import ThemeButton from './ThemeButton'

const StyledHeader = styled.header`
	display: flex;
	flex-direction: column;
	position: relative;

	@media screen and (max-width: 1200px) {
		padding-left: 27px;
		padding-right: 39px;
		margin-bottom: 22px;
	}
	@media screen and (min-width: 1200px) and (max-width: 1350px) {
		min-width: 420px;
		padding-top: 116px;
		margin-right: 89px;
	}
	@media screen and (min-width: 1350px) {
		min-width: 540px;
		padding-top: 116px;
		margin-right: 89px;
	}
`

const Header = (props) => {
	return (
		<StyledHeader >
			<TitleHeader theme={props.theme} textTitle={props.textTitle}/>
			<DescriptionHeader theme={props.theme} className={props.help ? 'VisuallyHidden' : ''} textDescription={props.textDescription}/>
			<ThemeButton onChangeTheme={props.onChangeTheme} theme={props.theme} text='Тык'/>
		</StyledHeader>
	)
}

export default Header