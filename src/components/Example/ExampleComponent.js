import React from 'react';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import example from './redux/exampleActions';
import {
  exampleDataSelector,
  exampleFetchingSelector
} from './exampleSelector';

const ExampleComponent = () => {
  const dispatch = useDispatch();
  const data = useSelector(exampleDataSelector());
  const fetching = useSelector(exampleFetchingSelector());

  const fetchExample = () => {
    dispatch(example.get());
  };
  return (
    <div data-testid="div">
      hello example!
      <table>
        <tbody>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>Body</th>
          </tr>
          {fetching && (
            <tr>
              <td>Loading data ...</td>
            </tr>
          )}
          {data.map(d => (
            <tr className="data" key={d.id}>
              <td>{d.id}</td>
              <td>{d.title}</td>
              <td>{d.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button onClick={fetchExample}>Click here!</Button>
    </div>
  );
};

export default ExampleComponent;
