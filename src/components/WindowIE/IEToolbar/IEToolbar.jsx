import React from 'react';
import { Toolbar, Separator } from 'react95';
import ButtonToolbar from '../../ButtonToolbar/ButtonToolbar';

import './IEToolbar.css';

import openFdrIcn from '../../../assets/Icons/ToolbarIcons/open-folder-icon.png';
import homeIcn from '../../../assets/Icons/ToolbarIcons/homepage-icon.png';
import chevronLeftIcn from 'pixelarticons/svg/chevron-left.svg';
import chevronRightIcn from 'pixelarticons/svg/chevron-right.svg';
import stopIcn from 'pixelarticons/svg/file-delete.svg';
import reloadIcn from 'pixelarticons/svg/repeat.svg';
import newFolderIcn from '../../../assets/Icons/ToolbarIcons/new-folder.png';
import downloadIcn from '../../../assets/Icons/ToolbarIcons/download-icon.png';
import increaseIcn from '../../../assets/Icons/ToolbarIcons/increase-size-icon.png';
import decreaseIcn from '../../../assets/Icons/ToolbarIcons/decrease-size-icon.png';
import cutIcn from 'pixelarticons/svg/cut.svg';
import copyIcn from 'pixelarticons/svg/copy.svg';
import pasteIcn from 'pixelarticons/svg/clipboard.svg';

// TODO: Make a new component for the icons on toolbar - ToolbarIcon

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
