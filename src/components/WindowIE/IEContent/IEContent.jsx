import React from 'react';
import { Frame } from 'react95';

import './IEContent.css';

function IEContent() {
	return (
		<div id="ie-container">
			<Frame variant="field" id="ie-content">
				<h2>My Social Networks</h2>
				<p>You can find me on:</p>
				<ul>
					<li>LinkedIn</li>
					<li>GitHub</li>
					<li>X</li>
				</ul>
			</Frame>
		</div>
	);
}

export default IEContent;
