import React from 'react';

import './DesktopIcon.css';

function DesktopIcon({ iconImage, iconText, onClick }) {
	return (
		<button id="desktop-icon" onClick={onClick}>
			<img src={iconImage} />
			<span id="desktop-icon-text">{iconText}</span>
		</button>
	);
}

export default DesktopIcon;
