import React from 'react';
import { Frame } from 'react95';

import './IEContent.css';
import linkedIn from '../../../assets/Content/MyComputer/linkedin-logo.png';
import githubIcn from '../../../assets/Content/MyComputer/github-logo.png';
import twitterIcn from '../../../assets/Content/MyComputer/twitter-logo.png';

function IEContent() {
	return (
		<div id="ie-container">
			<Frame variant="field" id="ie-content">
				<h2>My Social Networks</h2>
				<div className="divider"></div>
				<div id="social-links">
					<div className="link-container">
						<img src={linkedIn} alt="LinkedIn" />
						<a
							href="https://www.linkedin.com/in/ednanrff/"
							target="_blank"
							rel="noopener noreferrer"
						>
							LinkedIn
						</a>
					</div>
					<div className="link-container">
						<img src={githubIcn} alt="GitHub" />
						<a
							href="https://github.com/ednanf"
							target="_blank"
							rel="noopener noreferrer"
						>
							GitHub
						</a>
					</div>
					<div className="link-container">
						<img src={twitterIcn} alt="" />
						<a
							href="https://x.com/ednanf"
							target="_blank"
							rel="noopener noreferrer"
						>
							Twitter
						</a>
					</div>
				</div>
			</Frame>
		</div>
	);
}

export default IEContent;
