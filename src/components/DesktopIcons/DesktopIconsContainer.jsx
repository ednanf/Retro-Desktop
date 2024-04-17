import React from 'react';
import DesktopIcon from './DesktopIcon/DesktopIcon';

import './DesktopIconsContainer.css';
import myComputerIcn from '../../assets/Icons/my-computer-icon.png';
import networkIcn from '../../assets/Icons/network-neighborhood-icon.png';
import mailIcon from '../../assets/Icons/mail-icon.png';
import recycleBinIcn from '../../assets/Icons/recycle-bin-icon.png';
import documentIcn from '../../assets/Icons/document-icon.png';
import folderIcn from '../../assets/Icons/folder-icon.png';
import weatherIcn from '../../assets/Icons/sunrise-icon.png';

// TODO: Change resume's icon to txt icon

function DesktopIconsContainer() {
	return (
		<div id="icons-container">
			<div id="icons-column">
				<DesktopIcon iconImage={myComputerIcn} iconText="My Computer" />
				<DesktopIcon iconImage={networkIcn} iconText="Network Neighborhood" />
				<DesktopIcon iconImage={mailIcon} iconText="Inbox" />
				<DesktopIcon iconImage={recycleBinIcn} iconText="Recycle Bin" />
				<DesktopIcon iconImage={documentIcn} iconText="Resume.txt" />
				<DesktopIcon iconImage={folderIcn} iconText="Portfolio" />
				<DesktopIcon iconImage={weatherIcn} iconText="Weather.exe" />
			</div>
		</div>
	);
}

export default DesktopIconsContainer;
