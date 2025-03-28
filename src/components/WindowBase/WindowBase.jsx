import React, { useRef, useState } from 'react';
import { useStore } from '../../util/Store';
import Moveable from 'react-moveable';
import { Window, WindowHeader, Button } from 'react95';

import WindowMenuBar from '../WindowMenuBar/WindowMenuBar';

import './WindowBase.css';
import closeIcn from '../../assets/Icons/UIIcons/close-icon.png';

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

	// Window active management
	const store = useStore();
	const { globalZIndex, increaseGlobalZIndex } = store;

	const [zIndex, setZIndex] = useState(0);

	function handleClick() {
		setZIndex(globalZIndex + 1);
		increaseGlobalZIndex();
	}

	console.log(globalZIndex, zIndex);

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
				zIndex: zIndex,
			}}
			ref={targetRef}
			onMouseDown={handleClick}
		>
			<WindowHeader
				// FIXME: make the window active when closing the frontmost one
				active={globalZIndex !== zIndex ? false : true}
				className="window-header"
			>
				<div className="draggable-area" ref={dragTargetRef}>
					<div className="window-title non-selectable-text">
						<img
							src={headerIcn}
							alt="Window header icon"
							className="header-icon"
						/>
						<span>{windowTitle}</span>
					</div>
				</div>
				<Button onMouseDown={closeWindow}>
					<img
						src={closeIcn}
						alt="Close icon"
						className="close-icon"
						// this is the place that loads less items with onLoad, necessary for making the window the frontmost always
						onLoad={handleClick}
					/>
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
