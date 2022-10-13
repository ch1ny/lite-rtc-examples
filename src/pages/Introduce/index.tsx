import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import codes from './codes';
import { DisplayMediaDemo } from './demos';

export const Introduce = () => {
	return (
		<>
			<div>
				<DisplayMediaDemo />
				<SyntaxHighlighter language='typescript' style={atomOneDark}>
					{codes.display_media_demo}
				</SyntaxHighlighter>
			</div>
		</>
	);
};
