import apiActions from '../apiActions';
import { createActionTypes } from '../actionsUtils';

const TEST = createActionTypes('TEST', [
  'GET',
  'GET_ONE',
  'SAVE',
  'PUT',
  'PATCH',
  'DELETE',
  'SUCCESS',
  'FAILURE'
]);

const apiAcion = apiActions(TEST);

test('should return get action', async () => {
  const getAction = apiAcion.get();

  expect(getAction).toMatchSnapshot();
});
test('should return getone action', async () => {
  const getAction = apiAcion.getOne(1);

  expect(getAction).toMatchSnapshot();
});
test('should return save action', async () => {
  const getAction = apiAcion.save({});

  expect(getAction).toMatchSnapshot();
});
test('should return success action', async () => {
  const getAction = apiAcion.success({});

  expect(getAction).toMatchSnapshot();
});
test('should return failure action', async () => {
  const getAction = apiAcion.failure({});

  expect(getAction).toMatchSnapshot();
});
test('should return put action', async () => {
  const getAction = apiAcion.put(1);

  expect(getAction).toMatchSnapshot();
});
test('should return patch action', async () => {
  const getAction = apiAcion.patch(1);

  expect(getAction).toMatchSnapshot();
});
test('should return delete action', async () => {
  const getAction = apiAcion.delete(1);

  expect(getAction).toMatchSnapshot();
});
