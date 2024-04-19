import React from 'react';
import { useStore } from '../../util/Store';

import './WindowIE.css';
import WindowBase from '../WindowBase/WindowBase';
import IEToolbar from './IEToolbar/IEToolbar';
import URLBar from './URLBar/URLBar';
import IEContent from './IEContent/IEContent';
import titleIcn from '../../assets/Icons/WindowTitleIcons/ie-window-icn.png';

function WindowIE() {
	const closeWindow = useStore((state) => state.hideIE);

	return (
		<WindowBase
			windowTitle="Microsoft Internet Explorer - My Social Networks"
			headerIcn={titleIcn}
			toolbarButtonsArr={['File', 'Edit', 'View', 'Favorites', 'Help']}
			height="600"
			width="800"
			closeWindow={closeWindow}
		>
			<IEToolbar />
			<URLBar />
			<IEContent />
		</WindowBase>
	);
}

export default WindowIE;
