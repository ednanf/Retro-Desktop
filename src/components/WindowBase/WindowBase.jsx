import React from 'react';
import { Window, WindowHeader, Button } from 'react95';

import './WindowBase.css';
import closeIcn from '../../assets/Icons/close-icon.png';

function WindowBase({
	windowTitle,
	height,
	width,
	resizable = false,
	children,
}) {
	return (
		<Window
			resizable={resizable}
			shadow={true}
			style={{ width: `${width}px`, height: `${height}px` }}
		>
			<WindowHeader className="window-header">
				<span>{windowTitle}</span>
				<Button>
					<img src={closeIcn} alt="Close icon" className="close-icon" />
				</Button>
			</WindowHeader>
			{children}
		</Window>
	);
}

export default WindowBase;
