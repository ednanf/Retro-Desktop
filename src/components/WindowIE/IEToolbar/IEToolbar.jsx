import React from 'react';
import { Toolbar, Separator } from 'react95';
import ButtonToolbar from '../../ButtonToolbar/ButtonToolbar';

import './IEToolbar.css';

import openFdrIcn from '../../../assets/Icons/ToolbarIcons/open-folder-icon.svg';
import homeIcn from '../../../assets/Icons/ToolbarIcons/homepage-icon.png';
import chevronLeftIcn from 'pixelarticons/svg/chevron-left.svg';
import chevronRightIcn from 'pixelarticons/svg/chevron-right.svg';
import stopIcn from 'pixelarticons/svg/file-delete.svg';
import reloadIcn from '../../../assets/Icons/ToolbarIcons/refresh-icon.svg';
import newFolderIcn from '../../../assets/Icons/ToolbarIcons/new-folder.png';
import downloadIcn from '../../../assets/Icons/ToolbarIcons/download-icon.png';
import increaseIcn from '../../../assets/Icons/ToolbarIcons/font-big-icon.svg';
import decreaseIcn from '../../../assets/Icons/ToolbarIcons/font-small-icon.svg';
import cutIcn from '../../../assets/Icons/ToolbarIcons/cut-icon.svg';
import copyIcn from '../../../assets/Icons/ToolbarIcons/copy-icon.svg';
import pasteIcn from '../../../assets/Icons/ToolbarIcons/paste-icon.svg';

function IEToolbar() {
	return (
		<>
			<Separator />
			<Toolbar id="ie-toolbar">
				<div className="toolbar-group">
					<ButtonToolbar icon={openFdrIcn} />
					<ButtonToolbar icon={homeIcn} />
				</div>
				<div className="toolbar-group">
					<ButtonToolbar icon={chevronLeftIcn} />
					<ButtonToolbar icon={chevronRightIcn} />
				</div>
				<div className="toolbar-group">
					<ButtonToolbar icon={stopIcn} />
					<ButtonToolbar icon={reloadIcn} />
				</div>
				<div className="toolbar-group">
					<ButtonToolbar icon={newFolderIcn} />
					<ButtonToolbar icon={downloadIcn} />
				</div>
				<div className="toolbar-group">
					<ButtonToolbar icon={increaseIcn} />
					<ButtonToolbar icon={decreaseIcn} />
				</div>
				<div className="toolbar-group">
					<ButtonToolbar icon={cutIcn} />
					<ButtonToolbar icon={copyIcn} />
					<ButtonToolbar icon={pasteIcn} />
				</div>
			</Toolbar>
			<Separator />
		</>
	);
}

export default IEToolbar;
