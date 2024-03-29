/*
 * @Description: In User Settings Edit
 * @Author: sucaisheng
 * @Date: 2019-10-10 20:24:07
 * @LastEditTime: 2019-10-11 16:44:28
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
        from:'北京',
        to: '上海',
        isCitySelectorVisible: false,
        currentSelectingLeftCity: false,
        cityData: null,
        isLoadingCityData: false,
        isDateSelectorVisible: false,
        highSpeed: false,
    },
    applyMiddleware(thunk)
);