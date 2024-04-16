import React from 'react';
import { Tooltip } from 'react95';

function TrayIcon({ imgName, imgAlt, tooltipText }) {
	return (
		<Tooltip text={tooltipText} enterDelay={400} leaveDelay={100}>
			<img src={imgName} alt={imgAlt} />
		</Tooltip>
	);
}

export default TrayIcon;
