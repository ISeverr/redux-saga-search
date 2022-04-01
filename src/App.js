import SearchPage from './componets/searchPage/SearchForm';

import { Provider } from 'react-redux';

import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <SearchPage />
    </Provider>
  );
}

export default App;
