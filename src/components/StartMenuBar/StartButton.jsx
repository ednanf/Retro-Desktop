import React, { useState } from 'react';
import { Button, MenuList, MenuListItem, Separator, Tooltip } from 'react95';

import startMenuIcn from '../../assets/Icons/StartMenuIcons/start-menu-icon.png';

function StartButton() {
	const [open, setOpen] = useState(false);

	// Close the menu when clicking outside of it
	document.addEventListener('click', (e) => {
		if (!e.target.closest('.non-selectable-text')) {
			setOpen(false);
		}
	});

	return (
		<div id="start-button">
			<Tooltip
				text="Click here to begin"
				style={{ left: '80px' }}
				enterDelay={400}
				leaveDelay={0}
				onOpen={close}
				className="non-selectable-text"
			>
				<Button
					onClick={() => setOpen(!open)}
					active={open}
					style={{ fontWeight: 'bold' }}
					className="non-selectable-text"
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
					className="non-selectable-text"
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
