import React from 'react';
import { Button } from 'react95';

function ButtonToolbar({ icon }) {
	console.log(icon.typeOf);
	return (
		<Button variant="default" style={{ height: '32px', width: '32px' }}>
			<img src={icon} alt="" style={{ height: '22px', width: '22px' }} />
		</Button>
	);
}

export default ButtonToolbar;
