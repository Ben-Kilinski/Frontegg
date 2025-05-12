import './App.css';
import { useEffect } from 'react';
import { useAuth, useLoginWithRedirect } from "@frontegg/react";
import HomePage from '../src/Homepage';

function App() {
  const { isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();

  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect]);

  return (
    <div className="App">
      {isAuthenticated ? <HomePage /> : <p>Redirecionando para login...</p>}
    </div>
  );
}

export default App;
