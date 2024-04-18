import React from 'react';

import './DesktopIcon.css';

// TODO: Try to add the active class when the window is selected
// the issue is if the user open more than 1 window

function DesktopIcon({ iconImage, iconText, onClick }) {
	return (
		<button id="desktop-icon" onClick={onClick}>
			<img src={iconImage} />
			<span id="desktop-icon-text">{iconText}</span>
		</button>
	);
}

export default DesktopIcon;
