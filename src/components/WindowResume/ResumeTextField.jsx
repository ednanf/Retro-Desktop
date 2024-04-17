import React from 'react';
import { TextInput } from 'react95';

function ResumeTextField({ text }) {
	return <TextInput multiline variant="default" value={text} />;
}

export default ResumeTextField;
