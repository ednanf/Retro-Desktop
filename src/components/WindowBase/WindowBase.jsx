import React, { useRef } from 'react';
import Moveable from 'react-moveable';
import { Window, WindowHeader, Button } from 'react95';

import WindowMenuBar from '../WindowMenuBar/WindowMenuBar';

import './WindowBase.css';
import closeIcn from '../../assets/Icons/UIIcons/close-icon.png';

// TODO: make toolbar be optional
// To make it optional, make a boolean prop to render it only if true

// FIXME: Find a way to not make the screen scrollable if the window go out of bounds

function WindowBase({
	windowTitle,
	toolbarButtonsArr = [],
	height,
	width,
	resizable = false,
	headerIcn,
	closeWindow,
	children,
}) {
	// Sets the target component that will be moved - "target" prop
	const targetRef = useRef();

	// Defines the area that is draggable - "dragTarget" prop
	const dragTargetRef = useRef();

	return (
		<Window
			resizable={resizable}
			shadow={true}
			style={{
				width: `${width}px`,
				height: `${height}px`,
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
			}}
			ref={targetRef}
		>
			<WindowHeader className="window-header">
				<div className="draggable-area" ref={dragTargetRef}>
					<div className="window-title">
						<img
							src={headerIcn}
							alt="Window header icon"
							className="header-icon"
						/>
						<span>{windowTitle}</span>
					</div>
				</div>
				<Button onClick={closeWindow}>
					<img src={closeIcn} alt="Close icon" className="close-icon" />
				</Button>
			</WindowHeader>
			<WindowMenuBar buttonsArray={toolbarButtonsArr} />
			{children}
			<Moveable
				target={targetRef}
				dragTarget={dragTargetRef}
				draggable={true}
				throttleDrag={1}
				edgeDraggable={false}
				startDragRotate={0}
				throttleDragRotate={0}
				zoom={0}
				onDrag={(e) => {
					e.target.style.transform = e.transform;
				}}
			/>
		</Window>
	);
}

export default WindowBase;
