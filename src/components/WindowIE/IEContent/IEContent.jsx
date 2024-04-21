import React from 'react';
import { Frame } from 'react95';

import './IEContent.css';

function IEContent() {
	return (
		<div id="ie-container">
			<Frame variant="field" id="ie-content">
				<h2>My Social Networks</h2>
				<div id="social-links">
					<a
						href="https://www.linkedin.com/in/ednanrff/"
						target="_blank"
						rel="noopener noreferrer"
					>
						LinkedIn
					</a>
					<a
						href="https://github.com/ednanf"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub
					</a>
					<a
						href="https://x.com/ednanf"
						target="_blank"
						rel="noopener noreferrer"
					>
						X
					</a>
					<a
						href="https://mastodon.net/@myusername"
						target="_blank"
						rel="noopener noreferrer"
					>
						Mastodon
					</a>
				</div>
			</Frame>
		</div>
	);
}

export default IEContent;
