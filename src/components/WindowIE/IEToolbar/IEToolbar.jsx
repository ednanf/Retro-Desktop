import React from 'react';
import { Toolbar, Button, Separator } from 'react95';

import './IEToolbar.css';

import openFdrIcn from '../../../assets/Icons/IEToolbarIcons/open-folder-icon.png';
import homeIcn from '../../../assets/Icons/IEToolbarIcons/homepage-icon.png';

function IEToolbar() {
	return (
		<>
			<Separator />
			<Toolbar id="ie-toolbar">
				<Button variant="default" style={{ height: '32px', width: '32px' }}>
					<img
						src={openFdrIcn}
						alt="Icon"
						style={{ height: '22px', width: '22px' }}
					/>
				</Button>
				<Button variant="default" style={{ height: '32px', width: '32px' }}>
					<img
						src={homeIcn}
						alt="Icon"
						style={{ height: '22px', width: '22px' }}
					/>
				</Button>
			</Toolbar>
			<Separator />
		</>
	);
}

export default IEToolbar;
