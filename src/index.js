import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from "@material-ui/styles";
import { theme } from './theme';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <App/>
        </Provider>
    </ThemeProvider>,
    document.getElementById('root')
);

serviceWorkerRegistration.register();