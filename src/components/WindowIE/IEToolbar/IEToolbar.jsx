import React from 'react';
import { Toolbar, Button, Separator } from 'react95';

import './IEToolbar.css';

import openFdrIcn from '../../../assets/Icons/IEToolbarIcons/open-folder-icon.png';
import homeIcn from '../../../assets/Icons/IEToolbarIcons/homepage-icon.png';
import chevronLeftIcn from 'pixelarticons/svg/chevron-left.svg';
import chevronRightIcn from 'pixelarticons/svg/chevron-right.svg';
import stopIcn from 'pixelarticons/svg/file-delete.svg';
import reloadIcn from 'pixelarticons/svg/repeat.svg';
import newFolderIcn from '../../../assets/Icons/IEToolbarIcons/new-folder.png';
import downloadIcn from '../../../assets/Icons/IEToolbarIcons/download-icon.png';
import increaseIcn from '../../../assets/Icons/IEToolbarIcons/increase-size-icon.png';
import decreaseIcn from '../../../assets/Icons/IEToolbarIcons/decrease-size-icon.png';
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
					<Button variant="default" style={{ height: '32px', width: '32px' }}>
						<img
							src={openFdrIcn}
							alt="Open"
							style={{ height: '22px', width: '22px' }}
						/>
					</Button>
					<Button variant="default" style={{ height: '32px', width: '32px' }}>
						<img
							src={homeIcn}
							alt="Home"
							style={{ height: '22px', width: '22px' }}
						/>
					</Button>
				</div>
				<div className="toolbar-group">
					<Button variant="default" style={{ height: '32px', width: '32px' }}>
						<img
							src={chevronLeftIcn}
							alt="Go back"
							style={{ height: '22px', width: '22px' }}
						/>
					</Button>
					<Button variant="default" style={{ height: '32px', width: '32px' }}>
						<img
							src={chevronRightIcn}
							alt="Go forward"
							style={{ height: '22px', width: '22px' }}
						/>
					</Button>
				</div>
				<div className="toolbar-group">
					<Button variant="default" style={{ height: '32px', width: '32px' }}>
						<img
							src={stopIcn}
							alt="Stop"
							style={{ height: '22px', width: '22px' }}
						/>
					</Button>
					<Button variant="default" style={{ height: '32px', width: '32px' }}>
						<img
							src={reloadIcn}
							alt="Reload"
							style={{ height: '22px', width: '22px' }}
						/>
					</Button>
				</div>
				<div className="toolbar-group">
					<Button variant="default" style={{ height: '32px', width: '32px' }}>
						<img
							src={newFolderIcn}
							alt="Add favorite"
							style={{ height: '22px', width: '22px' }}
						/>
					</Button>
					<Button variant="default" style={{ height: '32px', width: '32px' }}>
						<img
							src={downloadIcn}
							alt="Download"
							style={{ height: '22px', width: '22px' }}
						/>
					</Button>
				</div>
				<div className="toolbar-group">
					<Button variant="default" style={{ height: '32px', width: '32px' }}>
						<img
							src={increaseIcn}
							alt="Increase text"
							style={{ height: '22px', width: '22px' }}
						/>
					</Button>
					<Button variant="default" style={{ height: '32px', width: '32px' }}>
						<img
							src={decreaseIcn}
							alt="Decrese text"
							style={{ height: '22px', width: '22px' }}
						/>
					</Button>
				</div>
				<div className="toolbar-group">
					<Button variant="default" style={{ height: '32px', width: '32px' }}>
						<img
							src={cutIcn}
							alt="Cut"
							style={{ height: '22px', width: '22px' }}
						/>
					</Button>
					<Button variant="default" style={{ height: '32px', width: '32px' }}>
						<img
							src={copyIcn}
							alt="Copy"
							style={{ height: '22px', width: '22px' }}
						/>
					</Button>
					<Button variant="default" style={{ height: '32px', width: '32px' }}>
						<img
							src={pasteIcn}
							alt="Paste"
							style={{ height: '22px', width: '22px' }}
						/>
					</Button>
				</div>
			</Toolbar>
			<Separator />
		</>
	);
}

export default IEToolbar;
