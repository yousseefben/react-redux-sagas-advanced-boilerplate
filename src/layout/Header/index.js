import {
  Avatar,
  Badge,
  Button,
  Card,
  Divider,
  Icon,
  Menu,
  Popover
} from 'antd';
import React, { useState } from 'react';
// import { IoIosLogOut } from 'react-icons/io';
// import { logOutUser } from 'redux/actions/sessionActions';
// import history from 'utils/history';

const NotificationContent = () => {
  return (
    <Card bordered={false} style={{ width: 300 }} bodyStyle={{ padding: 0 }}>
      <Card.Meta
        avatar={
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        }
        title="Card title"
        description="This is the description"
        style={{ marginTop: 15 }}
      />
      <Card.Meta
        avatar={
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        }
        title="Card title"
        description="This is the description"
        style={{ marginTop: 15 }}
      />
    </Card>
  );
};

const handleProfileClick = () => {
  // history.push('/profile');
};

const menu = (
  <Card
    className="card-user"
    bordered={false}
    style={{ width: 120 }}
    bodyStyle={{ padding: 0 }}
  >
    <Button icon="user" className="custom-btn" onClick={handleProfileClick}>
      Profile
    </Button>
    <Divider />
    {/* <Button type="danger" className="custom-btn" onClick={() => logOutUser()}> */}
    {/*  <Icon component={IoIosLogOut} /> */}
    {/*  Sign Out */}
    {/* </Button> */}
  </Card>
);

const HeaderContent = () => {
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [nameVisible, setNameVisible] = useState(false);

  const toggleNameVisibility = () => {
    setNameVisible(!nameVisible);
  };

  const toggleNotificationVisibility = () => {
    setNotificationVisible(!notificationVisible);
  };

  return (
    <Menu className="header" mode="horizontal">
      {/* <Menu.Item */}
      {/*  style={{ paddingTop: 10 }} */}
      {/*  onMouseEnter={toggleNotificationVisibility} */}
      {/*  onMouseLeave={toggleNotificationVisibility} */}
      {/* > */}
      {/*  <Popover */}
      {/*    content={NotificationContent()} */}
      {/*    trigger="click" */}
      {/*    visible={notificationVisible} */}
      {/*    placement="bottomRight" */}
      {/*  > */}
      {/*    <Badge dot className="notification"> */}
      {/*      <Icon type="notification" style={{ fontSize: 20 }} /> */}
      {/*    </Badge> */}
      {/*  </Popover> */}
      {/* </Menu.Item> */}
      {/* <Menu.Item */}
      {/*  onMouseEnter={toggleNameVisibility} */}
      {/*  onMouseLeave={toggleNameVisibility} */}
      {/*  style={{ paddingBottom: 6 }} */}
      {/* > */}
      {/*  <Popover */}
      {/*    overlayClassName="pop" */}
      {/*    content={menu} */}
      {/*    trigger="click" */}
      {/*    visible={nameVisible} */}
      {/*    placement="bottomRight" */}
      {/*  > */}
      {/*    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /> */}
      {/*  </Popover> */}
      {/* </Menu.Item> */}
    </Menu>
  );
};

export default HeaderContent;
