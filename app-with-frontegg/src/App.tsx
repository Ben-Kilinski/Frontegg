import { useState, useEffect } from 'react';
import { useAuth, useLoginWithRedirect } from '@frontegg/react';
import HomePage from '../src/HomePage';

export default function App() {
  const { isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();
  const [showSpinner, setShowSpinner] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isAuthenticated && !showSpinner) {
      loginWithRedirect();
    }
  }, [isAuthenticated, showSpinner, loginWithRedirect]);

  if (showSpinner) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-white border-opacity-70"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full">
      {isAuthenticated ? (
        <HomePage />
      ) : (
        <div className="flex items-center justify-center h-screen bg-gray-900">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-white border-opacity-70"></div>
        </div>
      )}
    </div>
  );
}
