import React, { useState } from 'react';
import { Tooltip } from 'react95';

// TODO: Add tooltip showing full date and time (with no seconds) when hovering the clock
function TrayClock() {
	let time = new Date().toLocaleTimeString([], {
		hour: '2-digit',
		minute: '2-digit',
	});

	let date = new Date().toLocaleDateString([], {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});

	const [currentTime, setCurrentTime] = useState(time);

	function updateTime() {
		let time = new Date().toLocaleTimeString([], {
			hour: '2-digit',
			minute: '2-digit',
		});
		setCurrentTime(time);
	}

	setInterval(updateTime, 1000);

	return (
		<Tooltip text={`${date} ${currentTime}`} enterDelay={100} leaveDelay={500}>
			<p>{currentTime}</p>
		</Tooltip>
	);
}

export default TrayClock;
