// scroll bar
import React from 'react';
import SSRProvider from 'react-bootstrap/SSRProvider';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

//
import { persistor } from './store';

import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';

import App from './App';

// import ScrollToTop from './components/ScrollToTop';

// ----------------------------------------------------------------------
window.React = React;

const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;

const helmetContext = {};

function Main() {
  return (
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <SSRProvider>
          <BrowserRouter>
            {/* <ScrollToTop /> */}
            <App />
          </BrowserRouter>
        </SSRProvider>
      </HelmetProvider>
    </React.StrictMode>
  );
}

if (typeof document !== 'undefined') {
  persistor.subscribe(() => {
    const { bootstrapped } = persistor.getState();

    if (bootstrapped) {
      renderMethod(<Main />, document.getElementById('root'));
    }
  });
}

// If you want to enable client cache, register instead.
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
