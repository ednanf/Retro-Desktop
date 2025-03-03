// React and frameworks
import React from 'react';
import { AppBar, Toolbar, Frame } from 'react95';

// Components
import StartButton from './StartButton';
import TrayClock from './TrayClock';
import TrayIcon from './TrayIcon';

// UI
import './StartMenuBar.css';

import speakersIcn from '../../assets/Icons/TrayIcons/speakers-tray-icon.svg';

function StartMenuBar() {
	return (
		<>
			<AppBar position="absolute" style={{ height: '52px' }}>
				<Toolbar style={{ justifyContent: 'space-between' }}>
					<StartButton />
					<Frame
						variant="well"
						style={{
							padding: '0.1rem 0.4rem 0rem 0.4rem',
						}}
					>
						<div className="tray-items">
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
