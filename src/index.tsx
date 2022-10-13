import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { App } from './App';
import './index.less';

const root = createRoot(document.querySelector('body > #root') as HTMLDivElement);
root.render(
	<HashRouter>
		<App />
	</HashRouter>
);
