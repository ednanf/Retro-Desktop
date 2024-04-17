import React, { useRef } from 'react';
import Moveable from 'react-moveable';

import { Resume } from '../../util/Resume';
import WindowBase from '../WindowBase/WindowBase';
import ResumeTextField from './ResumeTextField';

function WindowResume() {
	const targetRef = useRef();

	return (
		<div className="target" ref={targetRef}>
			<WindowBase
				resizable
				height="644"
				width="600"
				windowTitle="Resume - Notepad"
				toolbarButtonsArr={['File', 'Edit', 'Search', 'Help']}
			>
				<ResumeTextField text={Resume} />
			</WindowBase>
			<Moveable
				target={targetRef}
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
		</div>
	);
}

export default WindowResume;
