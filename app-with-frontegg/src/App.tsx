import { useEffect } from 'react';
import { useAuth, useLoginWithRedirect } from '@frontegg/react';
import HomePage from '../src/Homepage'; // ajuste conforme sua pasta real

export default function App() {
  const { isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();

  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect]);

  return (
    <div className="min-h-screen w-full">
      {isAuthenticated ? (
        <HomePage />
      ) : (
        <div className="flex items-center justify-center h-screen text-lg text-gray-700">
          Redirecionando para login...
        </div>
      )}
    </div>
  );
}

