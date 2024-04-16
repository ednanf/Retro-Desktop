import React, { useState } from 'react';
import { Tooltip } from 'react95';

function TrayClock() {
	let time = new Date().toLocaleTimeString([], {
		hour: '2-digit',
		minute: '2-digit',
	});

	// HACK: Has to be like this, otherwise it won't format like Windows95!
	let dateDay = new Date().toLocaleDateString([], {
		day: 'numeric',
	});

	let dateMonth = new Date().toLocaleDateString([], {
		month: 'long',
	});

	let dateYear = new Date().toLocaleDateString([], {
		year: 'numeric',
	});

	let date = `${dateDay} ${dateMonth} ${dateYear}`;

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
		<Tooltip
			text={date}
			enterDelay={100}
			leaveDelay={500}
			style={{ left: '25px' }}
		>
			<p>{currentTime}</p>
		</Tooltip>
	);
}

export default TrayClock;
