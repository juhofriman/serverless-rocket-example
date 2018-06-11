import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Rocket from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Rocket />, document.getElementById('root'));
registerServiceWorker();
