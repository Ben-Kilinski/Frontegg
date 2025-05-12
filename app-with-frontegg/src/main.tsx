import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { FronteggProvider } from '@frontegg/react';

const contextOptions = {
  baseUrl: 'https://staging-benki.frontegg.com',
  clientId: '5bbfc3df-0fa1-4cdd-876c-9fa93d032445', 
  appId: '11a4449f-2dd9-45f1-86eb-99ab4c657bf9'
};

const authOptions = {
  keepSessionAlive: true
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FronteggProvider 
    contextOptions={contextOptions} 
    hostedLoginBox={true}
    authOptions={authOptions}>
      <App />
  </FronteggProvider>
);
