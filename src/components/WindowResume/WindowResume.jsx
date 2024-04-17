import React from 'react';

import { Resume } from '../../util/Resume';
import WindowBase from '../WindowBase/WindowBase';
import ResumeTextField from './ResumeTextField';

function WindowResume() {
	return (
		<>
			<div className="target">
				<WindowBase
					resizable
					height="644"
					width="600"
					windowTitle="Resume - Notepad"
					toolbarButtonsArr={['File', 'Edit', 'Search', 'Help']}
				>
					<ResumeTextField text={Resume} />
				</WindowBase>
			</div>
		</>
	);
}

export default WindowResume;
