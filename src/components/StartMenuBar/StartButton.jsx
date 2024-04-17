import React, { useState } from 'react';
import { Button, MenuList, MenuListItem, Separator, Tooltip } from 'react95';

import startMenuIcn from '../../assets/Icons/start-menu-icon.png';

function StartButton() {
	const [open, setOpen] = useState(false);

	// TODO: hide tooltip when clicking on start button
	// TODO: hide start menu when clicking on desktop
	// TODO: Move CSS rules to a separate file

	return (
		<div id="start-button">
			<Tooltip
				text="Click here to begin"
				style={{ left: '80px' }}
				enterDelay={400}
				leaveDelay={0}
				onOpen={close}
			>
				<Button
					onClick={() => setOpen(!open)}
					active={open}
					style={{ fontWeight: 'bold' }}
				>
					<img src={startMenuIcn} alt="Start menu icon" />
					Start
				</Button>
			</Tooltip>
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
	);
}

export default StartButton;