import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import example from './exampleActions';
import {
  exampleDataSelector,
  exampleFetchingSelector
} from './exampleSelector';

const ExampleComponent = () => {
  const dispatch = useDispatch();
  const data = useSelector(exampleDataSelector());
  const fetching = useSelector(exampleFetchingSelector());

  return (
    <div>
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
            <tr className="data">
              <td>{d.id}</td>
              <td>{d.title}</td>
              <td>{d.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => dispatch(example.get())}>Click here!</button>
    </div>
  );
};

export default ExampleComponent;
