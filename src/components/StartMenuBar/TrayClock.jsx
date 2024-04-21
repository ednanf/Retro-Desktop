import React, { useState, useEffect } from 'react';
import { Tooltip } from 'react95';

function TrayClock() {
	const [currentTime, setCurrentTime] = useState(
		new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
	);

	const date = [
		new Date().toLocaleDateString([], { day: 'numeric' }),
		new Date().toLocaleDateString([], { month: 'long' }),
		new Date().toLocaleDateString([], { year: 'numeric' }),
	].join(' ');

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentTime(
				new Date().toLocaleTimeString([], {
					hour: '2-digit',
					minute: '2-digit',
				})
			);
		}, 1000);
		return () => clearInterval(intervalId);
	}, [setCurrentTime]);

	return (
		<Tooltip
			text={date}
			enterDelay={400}
			leaveDelay={0}
			style={{ left: '25px' }}
		>
			<p>{currentTime}</p>
		</Tooltip>
	);
}

export default TrayClock;
