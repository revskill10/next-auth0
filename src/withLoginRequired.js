import React, { useEffect } from 'react';
import useAuth0 from './useAuth0';

const withAuth = Component => props => {
  const { loading, isAuthenticated, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (loading || isAuthenticated) {
      return;
    }
    const fn = async () => {
      await loginWithRedirect({
        appState: { targetUrl: window.location.pathname },
      });
    };
    fn();
  }, [loading, isAuthenticated, loginWithRedirect]);

  if (isAuthenticated) {
    return <Component {...props} />;
  } else {
    return null;
  }
};

export default withAuth;
