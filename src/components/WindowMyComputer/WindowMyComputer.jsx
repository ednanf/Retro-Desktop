import React from 'react';
import { useStore } from '../../util/Store';

import WindowBase from '../WindowBase/WindowBase';
import MyComputerToolBar from './MyComputerToolbar/MyComputerToolbar';
import MyComputerContent from './MyComputerContent/MyComputerContent';

import myComputerIcn from '../../assets/Icons/WindowTitleIcons/my-computer-icon.svg';

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
			<MyComputerToolBar />
			<MyComputerContent />
		</WindowBase>
	);
}

export default WindowMyComputer;
