import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from "redux";

const middlewares: any[] = process.env.NODE_ENV === 'production' ?
                            [thunk] : [thunk, reduxImmutableStateInvariant()]
const initialState = {},
  store = (initialState) => {
    return createStore(
    initialState,
    applyMiddleware(...middlewares)
    );
  };

export default store;
