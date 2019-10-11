/*
 * @Description: In User Settings Edit
 * @Author: sucaisheng
 * @Date: 2019-10-10 20:24:07
 * @LastEditTime: 2019-10-10 21:07:13
 * @LastEditors: Please set LastEditors
 */
import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';

import reducers from './reducers';
import thunk from 'redux-thunk';

export default createStore(
    combineReducers(reducers),
    {

    },
    applyMiddleware(thunk)
);