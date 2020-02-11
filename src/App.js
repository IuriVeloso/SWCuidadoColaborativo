import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './services/reactotron';

import store from './store/index.js';
import Routes from './routes/routes.js';
import GlobalStyle from './styles/global.js';

function App() {
    return (
        <>
            <BrowserRouter>
                <Provider store={store}>
                    <Routes />
                    <GlobalStyle />
                </Provider>
            </BrowserRouter>
        </>
    );
}
export default App;
