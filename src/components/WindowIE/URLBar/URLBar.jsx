import React from 'react';
import { Select } from 'react95';
import './URLBar.css';

function URLBar() {
	const urls = ['www.bosta.com'];

	return (
		<div id="url-bar">
			<p>Address:</p>
			<Select
				defaultValue={2}
				options={urls}
				menuMaxHeight={160}
				width={800}
				onOpen={(e) => console.log('open', e)}
				onClose={(e) => console.log('close', e)}
				onBlur={(e) => console.log('blur', e)}
				onFocus={(e) => console.log('focus', e)}
			/>
		</div>
	);
}

export default URLBar;
