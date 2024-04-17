import React, { useState } from 'react';
import { TextInput } from 'react95';

function ResumeTextField({ text }) {
	const [textField, setTextField] = useState(text);

	function handleChange(e) {
		setTextField(e.target.value);
	}

	return (
		<TextInput
			multiline
			rows={28}
			variant="default"
			value={textField}
			onChange={handleChange}
		/>
	);
}

export default ResumeTextField;
