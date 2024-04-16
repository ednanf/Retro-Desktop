import React from 'react';

import './DesktopIcon.css';
// TODO: Make iconText white
function DesktopIcon({ iconImage, iconText }) {
	return (
		<button style={{ display: 'block' }}>
			<img src={iconImage} />
			{iconText}
		</button>
	);
}

export default DesktopIcon;
