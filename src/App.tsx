import { Button, Layout } from 'antd';
import React from 'react';
import styles from './App.module.less';
import { Sider } from './components/Sider';
import { Pages } from './pages';

export const App = () => {
	return (
		<>
			<Layout style={{ width: '100%', height: '100%' }}>
				<Layout.Header></Layout.Header>
				<Layout>
					<Layout.Sider>
						<Sider />
					</Layout.Sider>
					<Layout style={{ padding: '0px 24px', height: '100%', overflow: 'auto' }}>
						<Layout.Content style={{ background: '#FFF' }}>
							<Pages />
							<Layout.Footer>
								<div className={styles.footer}>
									<div>
										Lite RTC ©{new Date().getFullYear()} Created by 德布罗煜
									</div>
									<Button
										type='link'
										onClick={() => {
											window.open('https://beian.miit.gov.cn/', '_blank');
										}}>
										赣ICP备2021007955号-2
									</Button>
								</div>
							</Layout.Footer>
						</Layout.Content>
					</Layout>
				</Layout>
			</Layout>
		</>
	);
};
