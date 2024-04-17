import React from 'react';
import { TextInput } from 'react95';

function ResumeTextField({ text }) {
	return <TextInput multiline rows={28} variant="default" value={text} />;
}

export default ResumeTextField;
