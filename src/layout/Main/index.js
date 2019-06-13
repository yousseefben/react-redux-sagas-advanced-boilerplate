import { Layout } from 'antd';
import React from 'react';

import HeaderContent from '../Header';
import SiderContent from '../Sidebar';

const { Header, Content } = Layout;

const MainLayout = props => {
  const { children } = props;

  return (
    <Layout>
      <Header>
        <HeaderContent />
      </Header>

      <Layout style={{ minHeight: '100vh' }}>
        <SiderContent />
        <Layout>
          <Content>{children}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
