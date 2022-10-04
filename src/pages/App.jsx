import Button from '@mui/material/Button';
import * as React from 'react';
import { LandingPage } from './LandingPage';
import ThemeConfig from '../theme';
import { Routes } from 'react-router-dom';
import Router from '../routes';

function App() {
	const [dark, setDark] = React.useState(true);

	function changeMode() {
		setDark(!dark);
	}

	return (
		<>
			<ThemeConfig darkMode={dark}>
				<Router changeDark={changeMode}/>
			</ThemeConfig>
		</>
	);
}

export default App