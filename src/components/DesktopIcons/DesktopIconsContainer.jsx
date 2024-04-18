import React from 'react';
import { Tooltip } from 'react95';
import { useStore } from '../../util/Store';

import DesktopIcon from './DesktopIcon/DesktopIcon';

import './DesktopIconsContainer.css';
import myComputerIcn from '../../assets/Icons/my-computer-icon.png';
import ieIcn from '../../assets/Icons/ie-icon.png';
import mailIcon from '../../assets/Icons/mail-icon.png';
import recycleBinIcn from '../../assets/Icons/recycle-bin-icon.png';
import documentIcn from '../../assets/Icons/document-icon.png';
import folderIcn from '../../assets/Icons/folder-icon.png';
import weatherIcn from '../../assets/Icons/sunrise-icon.png';

// TODO: Change resume's icon to txt icon

function DesktopIconsContainer() {
	const showResume = useStore((state) => state.showResume);

	return (
		<div id="icons-container">
			<div id="icons-column">
				<DesktopIcon iconImage={myComputerIcn} iconText="My Computer" />
				<DesktopIcon iconImage={mailIcon} iconText="Inbox" />
				<DesktopIcon iconImage={recycleBinIcn} iconText="Recycle Bin" />
				<DesktopIcon iconImage={ieIcn} iconText="Internet Explorer" />
				<Tooltip text="My resume" enterDelay={400} leaveDelay={0}>
					<DesktopIcon
						iconImage={documentIcn}
						iconText="Resume"
						onClick={showResume}
					/>
				</Tooltip>
				<DesktopIcon iconImage={folderIcn} iconText="Portfolio" />
				<DesktopIcon iconImage={weatherIcn} iconText="Weather.exe" />
			</div>
		</div>
	);
}

export default DesktopIconsContainer;
