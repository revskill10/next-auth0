import Auth0Provider from "./Auth0Provider";
import Router from 'next/router'
const onRedirectCallback = appState => {
  Router.push(appState && appState.targetUrl
    ? appState.targetUrl
    : window.location.pathname
  )
};
const withAuth0 = MyApp => props => {
  return (
    <Auth0Provider
    domain={process.env.domain}
    client_id={process.env.clientId}
    redirect_uri={process.env.hostname}
    onRedirectCallback={onRedirectCallback}
  >
    <MyApp {...props} />
    </Auth0Provider>
  )
}

export default withAuth0
