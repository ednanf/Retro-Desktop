import React from 'react';
import {} from 'react95';

import { Resume } from '../../util/Resume';
import WindowBase from '../WindowBase/WindowBase';
import ResumeTextField from './ResumeTextField';

function WindowResume() {
	return (
		<WindowBase
			height="650"
			width="600"
			windowTitle="Portfolio"
			toolbarButtonsArr={['File', 'Edit', 'Search', 'Help']}
		>
			<ResumeTextField text={Resume} />
		</WindowBase>
	);
}

export default WindowResume;
