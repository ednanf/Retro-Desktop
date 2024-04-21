import React from 'react';
import { Frame } from 'react95';

import './IEContent.css';
import socialMedia from '../../../assets/Content/IEContent/social-network.gif';
import linkedIn from '../../../assets/Content/IEContent/linkedin-logo.png';
import githubIcn from '../../../assets/Content/IEContent/github-logo.png';
import twitterIcn from '../../../assets/Content/IEContent/twitter-logo.png';
import easel from '../../../assets/Content/IEContent/easel.gif';
import underConstruction from '../../../assets/Content/IEContent/under-construction.gif';
import madeWithWindows from '../../../assets/Content/IEContent/made-with-windows.gif';
import ieIcon from '../../../assets/Content/IEContent/ie-icon-button.gif';
import geocitiesIcon from '../../../assets/Content/IEContent/geocities.gif';
import bestViewed from '../../../assets/Content/IEContent/best-viewed.gif';
import learnHtml from '../../../assets/Content/IEContent/learn-html.gif';

function IEContent() {
	return (
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
			<div id="ie-footer">
				<div id="under-construction">
					<img src={easel} alt="Easel" />
					<img src={underConstruction} alt="Under Construction Sign" />
					<img src={underConstruction} alt="Under Construction Sign" />
					<img src={underConstruction} alt="Under Construction Sign" />
					<img src={easel} alt="Easel" />
				</div>
				<div id="ie-buttons-container">
					<img src={madeWithWindows} alt="Made with Windows" />
					<img src={ieIcon} alt="IE Button" />
					<img src={geocitiesIcon} alt="Geocities Button" />
					<img src={learnHtml} alt="Learn HTML Button" />
					<img src={bestViewed} alt="Best Viewed Button" />
				</div>
			</div>
		</Frame>
	);
}

export default IEContent;
