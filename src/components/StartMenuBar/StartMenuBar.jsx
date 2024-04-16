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

import startMenuIcn from '../../assets/Icons/start-menu-icon.png';
import displayPropIcn from '../../assets/Icons/display-properties-tray-icon.png';
import './StartMenuBar.css';

// const Wrapper = styled.div`
// 	padding: 5rem;
// 	background: ${({ theme }) => theme.desktopBackground};
// `;

function StartMenuBar() {
	const [open, setOpen] = useState(false);

	return (
		<>
			<AppBar position="absolute">
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
					<Frame variant="well" style={{ padding: '0.1rem 0.4rem' }}>
						<div
							style={{
								justifyContents: 'space-between',
								display: 'flex',
								gap: '0.5rem',
								alignItems: 'center',
							}}
						>
							<img src={displayPropIcn} alt="Display properties icon" />
							<TrayClock />
						</div>
					</Frame>
				</Toolbar>
			</AppBar>
		</>
	);
}

export default StartMenuBar;
