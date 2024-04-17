import React from 'react';
import DesktopIcon from './DesktopIcon/DesktopIcon';

import './DesktopIconsContainer.css';
import myComputerIcn from '../../assets/Icons/my-computer-icon.png';
import networkIcn from '../../assets/Icons/network-neighborhood-icon.png';
import recycleBinIcn from '../../assets/Icons/recycle-bin-icon.png';
import documentIcn from '../../assets/Icons/document-icon.png';
import folderIcn from '../../assets/Icons/folder-icon.png';

function DesktopIconsContainer() {
	return (
		<div id="icons-container">
			<div id="icons-column">
				<DesktopIcon iconImage={myComputerIcn} iconText="My Computer" />
				<DesktopIcon iconImage={networkIcn} iconText="Network Neighborhood" />
				<DesktopIcon iconImage={recycleBinIcn} iconText="Recycle Bin" />
				<DesktopIcon iconImage={documentIcn} iconText="Resume" />
				<DesktopIcon iconImage={folderIcn} iconText="Portfolio" />
			</div>
		</div>
	);
}

export default DesktopIconsContainer;
