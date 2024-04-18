import React, { useRef } from 'react';
// import Moveable from 'react-moveable';
import { Window, WindowHeader, Button } from 'react95';

import WindowToolbar from '../WindowToolbar/WindowToolbar';

import './WindowBase.css';
import closeIcn from '../../assets/Icons/close-icon.png';

// TODO: make toolbar be optional
// To make it optional, make a boolean prop to render it only if true

// FIXME: make the close button not be affected by the dragging target of moveable
// right now, it's disables so I can close the window

function WindowBase({
	windowTitle,
	toolbarButtonsArr = [],
	height,
	width,
	resizable = false,
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
			style={{ width: `${width}px`, height: `${height}px` }}
			ref={targetRef}
		>
			<WindowHeader className="window-header" ref={dragTargetRef}>
				<span>{windowTitle}</span>
				<Button>
					<img src={closeIcn} alt="Close icon" className="close-icon" />
				</Button>
			</WindowHeader>
			<WindowToolbar buttonsArray={toolbarButtonsArr} />
			{children}
			{/* <Moveable
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
			/> */}
		</Window>
	);
}

export default WindowBase;
