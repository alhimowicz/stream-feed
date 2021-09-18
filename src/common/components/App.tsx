import React, { ReactElement } from 'react';
import { Container } from '@mui/material';
import { Routes } from './../routes/routes';
import { Header } from './header/header';
import { ThemeProvider } from '@mui/system';

const App = (): ReactElement => {
	return (
		// <ThemeProvider theme={}>
			<Container maxWidth="lg">
				<Routes>
					<Header/>
				</Routes>
			</Container>
		// </ThemeProvider>
	);
};

export default App;
