import React, { ReactElement } from 'react';
import { Container } from '@mui/material';
import { Routes } from './../routes/routes';
import { Header } from './header/header';
import { QueryProvider } from '../contexts/query-context';
// import { ThemeProvider, createTheme } from '@mui/system';

const App = (): ReactElement => {
	// const theme = createTheme();

	return (
		<QueryProvider>
			{/* <ThemeProvider theme={theme}> */}
				<Container maxWidth="lg">
					<Routes>
						<Header/>
					</Routes>
				</Container>
			{/* </ThemeProvider> */}
		</QueryProvider>
	);
};

export default App;
