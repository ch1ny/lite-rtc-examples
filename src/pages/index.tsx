import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Introduce } from './Introduce';
import { QuickStart } from './QuickStart';

const Redirect = (props: { to: string }) => {
	const navigate = useNavigate();
	useEffect(() => {
		navigate(props.to);
	}, []);
	return null;
};

export const Pages = () => {
	return (
		<Routes>
			<Route path='/' element={<Redirect to='/introduce' />} />
			<Route path='/introduce' element={<Introduce />} />
			<Route path='/quick-start' element={<QuickStart />} />
		</Routes>
	);
};
