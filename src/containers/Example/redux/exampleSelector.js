import {
  errorSelector,
  fetchingSelector,
  getDataSelector
} from '../../../common/selectors';

const ENTITY = 'exampleData';

const exampleDataSelector = () => getDataSelector(ENTITY);

const exampleFetchingSelector = () => fetchingSelector(ENTITY);

const exampleErrorSelector = () => errorSelector(ENTITY);
export { exampleDataSelector, exampleFetchingSelector, exampleErrorSelector };
