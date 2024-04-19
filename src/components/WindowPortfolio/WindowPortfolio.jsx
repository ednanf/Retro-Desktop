import React from 'react';
import { useStore } from '../../util/Store';

import WindowBase from '../WindowBase/WindowBase';
import PortfolioToolbar from './PortfolioToolbar/PortfolioToolbar';

import openFolderSmIcn from '../../assets/Icons/WindowTitleIcons/open-folder-icon.png';

function WindowPortfolio() {
	const closeWindow = useStore((state) => state.hidePorfolio);

	return (
		<WindowBase
			windowTitle="Portfolio"
			headerIcn={openFolderSmIcn}
			toolbarButtonsArr={['File', 'Edit', 'View', 'Help']}
			height="600"
			width="800"
			closeWindow={closeWindow}
		>
			<PortfolioToolbar />
		</WindowBase>
	);
}

export default WindowPortfolio;
