import React from 'react';
import { useState } from 'react';

function TrayClock() {
	let time = new Date().toLocaleDateString([], {
		hour: '2-digit',
		minute: '2-digit',
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

	return <p>{currentTime}</p>;
}

export default TrayClock;
