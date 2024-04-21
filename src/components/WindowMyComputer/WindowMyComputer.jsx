import React from 'react';
import { useStore } from '../../util/Store';

import WindowBase from '../WindowBase/WindowBase';
import WindowExplorerToolbar from '../WindowExplorerToolbar/WindowExplorerToolbar';
import MyComputerContent from './MyComputerContent/MyComputerContent';

import myComputerIcn from '../../assets/Icons/WindowTitleIcons/my-computer-icon.svg';

// TODO: add a way to jump to and from portfolio from the Select menu

function WindowMyComputer() {
	const closeWindow = useStore((state) => state.hideMyComputer);

	return (
		<WindowBase
			windowTitle="My Computer"
			headerIcn={myComputerIcn}
			toolbarButtonsArr={['File', 'Edit', 'View', 'Help']}
			height="600"
			width="800"
			closeWindow={closeWindow}
		>
			<WindowExplorerToolbar
				selectIcon={myComputerIcn}
				selectText="My Computer"
			/>
			<MyComputerContent />
		</WindowBase>
	);
}

export default WindowMyComputer;
