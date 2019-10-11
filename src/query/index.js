/*
 * @Description: In User Settings Edit
 * @Author: sucaisheng
 * @Date: 2019-10-10 20:21:58
 * @LastEditTime: 2019-10-10 20:51:46
 * @LastEditors: Please set LastEditors
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import 'normalize.css/normalize.css';
import store from './store';
import './index.css';
import App from './App.jsx';

ReactDOM.render(<Provider store = {store}><App/></Provider>,
     document.getElementById('root')
     );