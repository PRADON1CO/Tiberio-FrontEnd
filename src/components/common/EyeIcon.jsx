import React from 'react';

const EyeIcon = ({ size = 20, color = 'white' }) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={2}>
		<path strokeLinecap="round" strokeLinejoin="round" d="M1.5 12s3.75-7.5 10.5-7.5S22.5 12 22.5 12s-3.75 7.5-10.5 7.5S1.5 12 1.5 12z" />
		<circle cx="12" cy="12" r="3" stroke={color} strokeWidth={2} />
	</svg>
);

export default EyeIcon;
