import React from 'react';
import { Select } from 'react95';
import './URLBar.css';

// TODO: add content to the select component (where the url should be)

//export interface SelectOption<T> { label: string; value: T; }

function URLBar() {
	const urls = [
		{ label: 'https://www.wherecanifindednan.com', value: '#' },
		{ label: 'https://www.altavista.com', value: '#' },
		{ label: 'https://www.aol.com', value: '#' },
		{ label: 'https://www.yahoo.com', value: '#' },
	];

	return (
		<div id="url-bar">
			<p>Address:</p>
			<Select
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
