import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { FronteggProvider } from '@frontegg/react';

const contextOptions = {
  baseUrl: import.meta.env.VITE_FRONTEGG_BASE_URL!,
  clientId: import.meta.env.VITE_FRONTEGG_CLIENT_ID!,
  appId: '11a4449f-2dd9-45f1-86eb-99ab4c657bf9',

  adminPortal: {
    enabled: true,
  },
};

const authOptions = {
  keepSessionAlive: true,
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <FronteggProvider
    contextOptions={contextOptions}
    hostedLoginBox={true}
    authOptions={authOptions}
  >
    <App />
  </FronteggProvider>
);
