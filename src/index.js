import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import { BrowserRouter as Router } from 'react-router-dom';

const appStore = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
<Provider store={appStore}>
    <Router>
         <App />
    </Router>
</Provider>
, document.getElementById('root'));
registerServiceWorker();
