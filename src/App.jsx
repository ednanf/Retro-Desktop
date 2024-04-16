// React and libraries
import React from 'react';
import { styleReset } from 'react95';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

// Components
import StartMenuBar from './components/StartMenuBar/StartMenuBar';
import DesktopIconsContainer from './components/DesktopIcons/DesktopIconsContainer';

// Theme
import original from 'react95/dist/themes/original';

// Windows95 fonts
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';

import './App.css';

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
`;

function App() {
	return (
		<>
			<GlobalStyles />
			<ThemeProvider theme={original}>
				<div className="no-scroll">
					<main className="desktop">
						<DesktopIconsContainer />
						<div id="start-bar">
							<StartMenuBar />
						</div>
					</main>
				</div>
			</ThemeProvider>
		</>
	);
}

export default App;