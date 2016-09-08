import "./assets/css/reset.css";
import './assets/css/style.css';
import React from 'react';
import { render } from 'react-dom';

import Routes from './components/routes';

render(<Routes/>, document.getElementById('hackjam'));
