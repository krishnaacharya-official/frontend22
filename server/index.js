import express from 'express';
import fs from 'fs';
import path from 'path';

import React from 'react';
import SSRProvider from 'react-bootstrap/SSRProvider';
import * as ReactDOMServer from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';

import { store } from '../src/store';

import App from '../src/App';

const PORT = process.env.PORT || 3000;
const app = express();

// app.use(helmet({ contentSecurityPolicy: false }));

app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('/*', (req, res) => {
  const helmetContext = {};

  const app = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url}>
        <HelmetProvider context={helmetContext}>
          <SSRProvider>
            <App />
          </SSRProvider>
        </HelmetProvider>
      </StaticRouter>
    </Provider>
  );

  console.log('Something went wrong: ', app);

  const indexFile = path.resolve(path.join(__dirname, '..', 'build', 'index.html'));

  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(data.replace('<div id="root"></div>', `<div id="root">${app}</div>`));
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
