// External modules
import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// My modules
import Normalize from './Normalize';
import Wrapper from './components/Wrapper'
import Header from './components/Header'
import Main from './components/Main';
import Decide from './components/Decide';
import Help from './components/Help';

const StyledHtml = createGlobalStyle`
	html {
		background-color: ${props => { return props.theme === 'black' ? 'var(--black)' : 'var(--white'}}
	}
`

const App = () => {
	const [theme, setTheme] = useState('white');
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [help, setHelp] = useState(false);

	const changeTitle = (text) => {
		setTitle(text)
	}
	const changeDescr = (text) => {
		setDescription(text)
	}
	const changeTheme = () => {
		setTheme(theme === 'white' ? 'black' : 'white');
	}
	const changeHelp = isHelp => {
		setHelp(isHelp);
	}

	return (
		<Wrapper theme={theme}>
			<Header help={help} theme={theme} changeHelp={changeHelp} onChangeTheme={changeTheme} textTitle={title} textDescription={description}/>
			<Normalize/>
			<StyledHtml theme={theme}/>

			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Main changeHelp={changeHelp} changeTitle={changeTitle} changeDescr={changeDescr} theme={theme}/>}/>
					<Route path='decide' element={<Decide changeHelp={changeHelp} changeTitle={changeTitle} changeDescr={changeDescr} theme={theme}/>}/>
					<Route path='help' element={<Help changeHelp={changeHelp} changeTitle={changeTitle} changeDescr={changeDescr} theme={theme}/>}/>
				</Routes>
			</BrowserRouter>
		</Wrapper>
	)
}

export default App

