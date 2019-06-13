import React, { useState } from 'react';
import { Icon, Menu, Layout } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import './sidebar.css';

const SidebarContent = ({ location }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout.Sider
      theme="light"
      collapsible
      collapsed={collapsed}
      width="180"
      onCollapse={toggle}
    >
      {/* <Icon */}
      {/*  className="trigger" */}
      {/*  type={collapsed ? 'menu-unfold' : 'menu-fold'} */}
      {/*  onClick={toggle} */}
      {/* /> */}
      <Menu defaultSelectedKeys={[location.pathname]} mode="inline">
        <Menu.Item key="/factures">
          <Link to="/factures">
            <Icon type="bar-chart" />
            <span>Factures</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/clients">
          <Link to="/clients">
            <Icon type="car" />
            <span>Clients</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/notifications">
          <Link to="/notifications">
            <Icon type="car" />
            <span>Notifications</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
};

export default withRouter(SidebarContent);
