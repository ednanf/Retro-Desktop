import React from 'react';
import DesktopIcon from './DesktopIcon/DesktopIcon';

import myComputerIcn from '../../assets/Icons/my-computer-icon.png';

function DesktopIconsContainer() {
	return (
		<div className="icons-container">
			<DesktopIcon iconImage={myComputerIcn} iconText="My Computer" />
		</div>
	);
}

export default DesktopIconsContainer;
