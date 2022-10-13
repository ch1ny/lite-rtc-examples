import { Menu } from 'antd';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const siderNavItems: ItemType[] = [
	{ label: 'Lite RTC', key: '/introduce' },
	{ label: '快速上手', key: '/quick-start' },
];

export const Sider = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

	useEffect(() => {
		setSelectedKeys([location.pathname]);
	}, [location]);

	return (
		<>
			<Menu
				items={siderNavItems}
				style={{ height: '100%' }}
				onSelect={(info) => {
					navigate(info.key);
				}}
				selectedKeys={selectedKeys}
			/>
		</>
	);
};
