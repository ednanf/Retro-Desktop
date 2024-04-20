import React from 'react';
import { Tooltip } from 'react95';
import { useStore } from '../../util/Store';

import DesktopIcon from './DesktopIcon/DesktopIcon';

import './DesktopIconsContainer.css';
import myComputerIcn from '../../assets/Icons/DesktopIcons/my-computer-icon.png';
import ieIcn from '../../assets/Icons/DesktopIcons/ie-icon.png';
import mailIcon from '../../assets/Icons/DesktopIcons/mail-icon.png';
import recycleBinIcn from '../../assets/Icons/DesktopIcons/recycle-bin-icon.png';
import documentIcn from '../../assets/Icons/DesktopIcons/document-icon.png';
import folderIcn from '../../assets/Icons/DesktopIcons/folder-icon.png';
import weatherIcn from '../../assets/Icons/DesktopIcons/sunrise-icon.png';

//TODO : fix IE icon text to be a column - it's too wide right now

function DesktopIconsContainer() {
	const showMyComputer = useStore((state) => state.showMyComputer);
	const showIE = useStore((state) => state.showIE);
	const showResume = useStore((state) => state.showResume);
	const showPortfolio = useStore((state) => state.showPortfolio);

	return (
		<div id="icons-container">
			<div id="icons-column">
				<Tooltip
					text="How to Use"
					enterDelay={1000}
					leaveDelay={0}
					style={{ position: 'absolute', top: '20px' }}
				>
					<DesktopIcon
						iconImage={myComputerIcn}
						iconText="My Computer"
						onClick={showMyComputer}
					/>
				</Tooltip>
				<DesktopIcon iconImage={mailIcon} iconText="Inbox" />
				<DesktopIcon iconImage={recycleBinIcn} iconText="Recycle Bin" />
				<Tooltip text="My Socials" enterDelay={1000} leaveDelay={0}>
					<DesktopIcon
						iconImage={ieIcn}
						iconText="Internet Explorer"
						onClick={showIE}
					/>
				</Tooltip>
				<Tooltip text="My Resume" enterDelay={1000} leaveDelay={0}>
					<DesktopIcon
						iconImage={documentIcn}
						iconText="Resume"
						onClick={showResume}
					/>
				</Tooltip>
				<Tooltip text="My Portfolio" enterDelay={1000} leaveDelay={0}>
					<DesktopIcon
						iconImage={folderIcn}
						iconText="Portfolio"
						onClick={showPortfolio}
					/>
				</Tooltip>
				<DesktopIcon iconImage={weatherIcn} iconText="Weather" />
			</div>
		</div>
	);
}

export default DesktopIconsContainer;
