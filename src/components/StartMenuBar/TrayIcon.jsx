import React from 'react';
import { Tooltip } from 'react95';

function TrayIcon({ imgName, imgAlt, tooltipText }) {
	return (
		<Tooltip
			text={tooltipText}
			enterDelay={400}
			leaveDelay={0}
			className="non-selectable-text"
		>
			<img src={imgName} alt={imgAlt} className="non-selectable-text" />
		</Tooltip>
	);
}

export default TrayIcon;
