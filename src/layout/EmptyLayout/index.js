import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

const EmptyLayout = ({ children }) => {
  return (
    <Layout>
      <Content>{children}</Content>
    </Layout>
  );
};
export default EmptyLayout;
