import React from 'react';
import { useStore } from '../../util/Store';

import { Resume } from '../../util/Resume';
import WindowBase from '../WindowBase/WindowBase';
import ResumeTextField from './ResumeTextField';

import headerIcn from '../../assets/Icons/WindowTitleIcons/document-title-icon.svg';

function WindowResume() {
	const hideResume = useStore((state) => state.hideResume);

	return (
		<WindowBase
			height="644"
			width="600"
			windowTitle="Resume - Notepad"
			headerIcn={headerIcn}
			toolbarButtonsArr={['File', 'Edit', 'Search', 'Help']}
			closeWindow={hideResume}
		>
			<ResumeTextField text={Resume} />
		</WindowBase>
	);
}

export default WindowResume;
