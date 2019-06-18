import React from 'react';
import { Button, Table, Card } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import example from './redux/exampleActions';
import {
  exampleDataSelector,
  exampleFetchingSelector
} from './redux/exampleSelector';

const ExampleComponent = () => {
  const dispatch = useDispatch();
  const data = useSelector(exampleDataSelector());
  const fetching = useSelector(exampleFetchingSelector());
  const error = useSelector(exampleDataSelector());

  const fetchExample = () => {
    dispatch(example.get());
  };
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      sorter: (a, b) => a.id - b.id
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: 'Body',
      dataIndex: 'body',
      key: 'body'
    }
  ];

  return (
    <div data-testid="div">
      <Card>
        {error.message}
        <Table
          dataSource={data}
          columns={columns}
          loading={fetching}
          rowKey={record => record.id}
        />
        <Button onClick={fetchExample}>Click here!</Button>
      </Card>
    </div>
  );
};

export default ExampleComponent;
