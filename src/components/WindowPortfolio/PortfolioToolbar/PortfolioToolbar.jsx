import React from 'react';
import { Toolbar, Separator, Select } from 'react95';
import ButtonToolbar from '../../ButtonToolbar/ButtonToolbar';

import './PortfolioToolbar.css';
import backIcn from '../../../assets/Icons/ToolbarIcons/back-icon.svg';
import checkFolderIcn from '../../../assets/Icons/ToolbarIcons/check-folder-icon.png';
import deleteFileIcon from '../../../assets/Icons/ToolbarIcons/erase-file-icon.png';
import cutIcn from '../../../assets/Icons/ToolbarIcons/cut-icon.svg';
import copyIcn from '../../../assets/Icons/ToolbarIcons/copy-icon.svg';
import pasteIcn from '../../../assets/Icons/ToolbarIcons/paste-icon.svg';
import undoIcn from '../../../assets/Icons/ToolbarIcons/undo-icon.svg';
import deleteIcn from '../../../assets/Icons/ToolbarIcons/delete-icon.svg';
import pointIcn from '../../../assets/Icons/ToolbarIcons/point-sheet-icon.svg';
import listLrgIcn from '../../../assets/Icons/ToolbarIcons/list-large-icon.svg';
import listIcn from '../../../assets/Icons/ToolbarIcons/list-icon.svg';
import list2Icn from '../../../assets/Icons/ToolbarIcons/list-2-icon.svg';
import detailsIcn from '../../../assets/Icons/ToolbarIcons/list-details-icon.svg';

// TODO: add text to the select component
function PortfolioToolbar() {
	return (
		<>
			<Separator />
			<Toolbar id="portfolio-toolbar">
				<Select
					defaultValue={2}
					menuMaxHeight={160}
					width={800}
					onOpen={(e) => console.log('open', e)}
					onClose={(e) => console.log('close', e)}
					onBlur={(e) => console.log('blur', e)}
					onFocus={(e) => console.log('focus', e)}
				/>
				<div id="portfolio-icon-container">
					<div id="portfolio-icons-group">
						<ButtonToolbar icon={backIcn} />
					</div>
					<div id="portfolio-icons-group">
						<ButtonToolbar icon={checkFolderIcn} />
						<ButtonToolbar icon={deleteFileIcon} />
					</div>
					<div id="portfolio-icons-group">
						<ButtonToolbar icon={cutIcn} />
						<ButtonToolbar icon={copyIcn} />
						<ButtonToolbar icon={pasteIcn} />
					</div>
					<div id="portfolio-icons-group">
						<ButtonToolbar icon={undoIcn} />
					</div>
					<div id="portfolio-icons-group">
						<ButtonToolbar icon={deleteIcn} />
						<ButtonToolbar icon={pointIcn} />
					</div>
					<div id="portfolio-icons-group">
						<ButtonToolbar icon={listLrgIcn} />
						<ButtonToolbar icon={listIcn} />
						<ButtonToolbar icon={list2Icn} />
						<ButtonToolbar icon={detailsIcn} />
					</div>
				</div>
			</Toolbar>
		</>
	);
}

export default PortfolioToolbar;
