import React from 'react';
import { renderToString } from 'react-dom/server';
import ssr from './ssr-render';
import App from '../client';

export default function(ctx){
	// App renderer
	const body = renderToString(<App />);
	return ssr(ctx, body);
}