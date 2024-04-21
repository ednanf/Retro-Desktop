import React from 'react';
import { Frame } from 'react95';

import './IEContent.css';
import socialMedia from '../../../assets/Content/IEContent/social-network.gif';
import linkedIn from '../../../assets/Content/IEContent/linkedin-logo.png';
import githubIcn from '../../../assets/Content/IEContent/github-logo.png';
import twitterIcn from '../../../assets/Content/IEContent/twitter-logo.png';

function IEContent() {
	return (
		<div id="ie-container">
			<Frame variant="field" id="ie-content">
				<img src={socialMedia} alt="" />
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
