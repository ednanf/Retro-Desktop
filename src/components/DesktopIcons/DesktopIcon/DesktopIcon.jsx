import React from 'react';

import './DesktopIcon.css';

// TODO: Make iconText white - maybe use a span tag
// TODO: Move CSS rules to a separate file

function DesktopIcon({ iconImage, iconText }) {
	return (
		<button style={{ display: 'block' }}>
			<img src={iconImage} />
			{iconText}
		</button>
	);
}

export default DesktopIcon;
