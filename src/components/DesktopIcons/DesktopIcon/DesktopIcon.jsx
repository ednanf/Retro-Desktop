import React, { useState } from 'react';

import './DesktopIcon.css';

function DesktopIcon({ iconImage, iconText }) {
	const [selected, setSelected] = useState(false);

	function handleClick() {
		setSelected((prevState) => !prevState);
	}

	return (
		<button id="desktop-icon" onClick={handleClick}>
			<img src={iconImage} />
			<span id="desktop-icon-text" className={selected ? 'active' : ''}>
				{iconText}
			</span>
		</button>
	);
}

export default DesktopIcon;
