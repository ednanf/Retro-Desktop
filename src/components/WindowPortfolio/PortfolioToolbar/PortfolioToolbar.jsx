import React from 'react';
import { Toolbar, Separator, Select } from 'react95';
import ButtonToolbar from '../../ButtonToolbar/ButtonToolbar';

import './PortfolioToolbar.css';
import folderIcn from '../../../assets/Icons/ToolbarIcons/open-folder-icon.png';
import checkFolderIcn from '../../../assets/Icons/ToolbarIcons/check-folder-icon.png';
import deleteFileIcon from '../../../assets/Icons/ToolbarIcons/erase-file-icon.png';
import cutIcn from 'pixelarticons/svg/cut.svg';
import copyIcn from 'pixelarticons/svg/copy.svg';
import pasteIcn from 'pixelarticons/svg/clipboard.svg';
import undoIcn from 'pixelarticons/svg/undo.svg';
import crossIcn from '../../../assets/Icons/ToolbarIcons/cross-icon.png';
import pointIcn from '../../../assets/Icons/ToolbarIcons/point-sheet-icon.png';

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
						<ButtonToolbar icon={folderIcn} />
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
						<ButtonToolbar icon={crossIcn} />
						<ButtonToolbar icon={pointIcn} />
					</div>
				</div>
			</Toolbar>
		</>
	);
}

export default PortfolioToolbar;
