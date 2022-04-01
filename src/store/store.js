import createSagaMiddleware from 'redux-saga'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import rootReducer from '../reducers/rootReducer';
import { SearchInputWatcher } from '../sagas/saga';
import saga from '../sagas/saga'

let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
    reducer: {
        root: rootReducer,
    },
    middleware
});

sagaMiddleware.run(saga);


export default store;