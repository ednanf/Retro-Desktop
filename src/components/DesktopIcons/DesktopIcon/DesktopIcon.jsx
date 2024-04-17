import React from 'react';

import './DesktopIcon.css';

function DesktopIcon({ iconImage, iconText }) {
	return (
		<button id="desktop-icon">
			<img src={iconImage} />
			<span id="desktop-icon-text"> {iconText} </span>
		</button>
	);
}

export default DesktopIcon;
