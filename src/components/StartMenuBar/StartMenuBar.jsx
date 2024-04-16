import React, { useState } from 'react';
import {
	AppBar,
	Toolbar,
	Button,
	MenuList,
	MenuListItem,
	Separator,
	Frame,
} from 'react95';
import TrayClock from './TrayClock';
import TrayIcon from './TrayIcon';

import './StartMenuBar.css';
import startMenuIcn from '../../assets/Icons/start-menu-icon.png';
import speakersIcn from '../../assets/Icons/speakers-tray-icon.png';

// TODO: Add tooltip to start button "Click here to begin"

function StartMenuBar() {
	const [open, setOpen] = useState(false);

	return (
		<>
			<AppBar position="absolute" style={{ height: '52px' }}>
				<Toolbar style={{ justifyContent: 'space-between' }}>
					<div id="start-button">
						<Button
							onClick={() => setOpen(!open)}
							active={open}
							style={{ fontWeight: 'bold' }}
						>
							<img src={startMenuIcn} alt="Start menu icon" />
							Start
						</Button>
						{open && (
							<MenuList
								style={{
									position: 'absolute',
									left: '4px',
									bottom: '93%',
								}}
							>
								<MenuListItem>Item 1</MenuListItem>
								<MenuListItem>Item 2</MenuListItem>
								<Separator />
								<MenuListItem>Item 3</MenuListItem>
							</MenuList>
						)}
					</div>
					<Frame
						variant="well"
						style={{ padding: '0.1rem 0.4rem 0rem 0.4rem' }}
					>
						<div
							style={{
								justifyContents: 'space-between',
								display: 'flex',
								gap: '0.5rem',
								alignItems: 'center',
							}}
						>
							<TrayIcon
								imgName={speakersIcn}
								imgAlt="Speakers"
								tooltipText="Volume"
							/>
							<TrayClock />
						</div>
					</Frame>
				</Toolbar>
			</AppBar>
		</>
	);
}

export default StartMenuBar;
