import React from 'react';
import ReactDOM from 'react-dom';

// import App components
import { App } from './components/app';

// compile App component in `#app` HTML element
ReactDOM.hydrate(<App/>, document.getElementById( 'app' ) );
