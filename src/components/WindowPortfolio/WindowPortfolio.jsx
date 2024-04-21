import React from 'react';
import { useStore } from '../../util/Store';

import WindowBase from '../WindowBase/WindowBase';
import WindowExplorerToolbar from '../WindowExplorerToolbar/WindowExplorerToolbar';
import PortfolioContent from './PortfolioContent/PortfolioContent';

import openFolderSmIcn from '../../assets/Icons/WindowTitleIcons/open-folder-icon.svg';

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
			<WindowExplorerToolbar
				selectIcon={openFolderSmIcn}
				selectText="Portfolio"
			/>
			<PortfolioContent />
		</WindowBase>
	);
}

export default WindowPortfolio;
