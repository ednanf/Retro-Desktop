import React from 'react';
import { useStore } from '../util/Store';

import WindowMyComputer from '../components/WindowMyComputer/WindowMyComputer';
import WindowIE from './WindowIE/WindowIE';
import WindowResume from '../components/WindowResume/WindowResume';
import WindowPortfolio from '../components/WindowPortfolio/WindowPortfolio';

function WindowManager() {
	const myComputerVisible = useStore((state) => state.myComputerVisible);
	const ieVisible = useStore((state) => state.ieVisible);
	const resumeVisible = useStore((state) => state.resumeVisible);
	const portfolioVisible = useStore((state) => state.portfolioVisible);

	return (
		<>
			{myComputerVisible && <WindowMyComputer />}
			{ieVisible && <WindowIE />}
			{resumeVisible && <WindowResume />}
			{portfolioVisible && <WindowPortfolio />}
		</>
	);
}

export default WindowManager;
