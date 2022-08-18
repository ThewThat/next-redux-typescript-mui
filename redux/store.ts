import { useMemo } from 'react';
import { configureStore } from '@reduxjs/toolkit'
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../redux/reducer';
import {todoReducer} from "../redux/reducer/todo";

const middleware = [thunk, logger];

export const store: Store<ArticleState, ArticleAction> & {
  dispatch: DispatchType;
} = createStore(todoReducer, applyMiddleware(...middleware));
