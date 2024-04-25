import React from 'react';
import { Tooltip } from 'react95';
import { useStore } from '../../util/Store';

import DesktopIcon from './DesktopIcon/DesktopIcon';

// FIXME: find IE icon in svg
import './DesktopIconsContainer.css';
import myComputerIcn from '../../assets/Icons/DesktopIcons/my-computer-icon.svg';
import ieIcn from '../../assets/Icons/DesktopIcons/ie-icon.png';
import mailIcon from '../../assets/Icons/DesktopIcons/mail-icon.svg';
import recycleBinIcn from '../../assets/Icons/DesktopIcons/recycle-bin-icon.svg';
import documentIcn from '../../assets/Icons/DesktopIcons/document-icon.svg';
import folderIcn from '../../assets/Icons/DesktopIcons/folder-icon.svg';
import weatherIcn from '../../assets/Icons/DesktopIcons/sunrise-icon.png';

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
					className="non-selectable-text"
				>
					<DesktopIcon
						iconImage={myComputerIcn}
						iconText="My Computer"
						onClick={showMyComputer}
					/>
				</Tooltip>
				<DesktopIcon iconImage={mailIcon} iconText="Inbox" />
				<DesktopIcon iconImage={recycleBinIcn} iconText="Recycle Bin" />
				<Tooltip
					text="My Socials"
					enterDelay={1000}
					leaveDelay={0}
					className="non-selectable-text"
				>
					<DesktopIcon
						iconImage={ieIcn}
						iconText="Internet Explorer"
						onClick={showIE}
					/>
				</Tooltip>
				<Tooltip
					text="My Resume"
					enterDelay={1000}
					leaveDelay={0}
					className="non-selectable-text"
				>
					<DesktopIcon
						iconImage={documentIcn}
						iconText="Resume"
						onClick={showResume}
					/>
				</Tooltip>
				<Tooltip
					text="My Portfolio"
					enterDelay={1000}
					leaveDelay={0}
					className="non-selectable-text"
				>
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
