import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './services/reactotron';

import history from './routes/history.js';
import store from './store/index.js';
import Routes from './routes/routes.js';
import GlobalStyle from './styles/global.js';

function App() {
    return (
        <>
            <BrowserRouter>
                <Provider store={store}>
                    <Router history={history}>
                        <Routes />
                        <GlobalStyle />
                    </Router>
                </Provider>
            </BrowserRouter>
        </>
    );
}
export default App;
