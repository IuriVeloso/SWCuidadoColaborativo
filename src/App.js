import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './services/reactotron';

import history from './routes/history.js';
import { store, persistor } from './store/index.js';
import Routes from './routes/routes.js';
import GlobalStyle from './styles/global.js';

function App() {
    return (
        <>
            <BrowserRouter>
                <Provider store={store}>
                    <PersistGate persistor={persistor}>
                        <Router history={history}>
                            <Routes />
                            <GlobalStyle />
                        </Router>
                    </PersistGate>
                </Provider>
            </BrowserRouter>
        </>
    );
}
export default App;
