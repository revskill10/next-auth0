const withConfig = (nextConfig = {}) => {
  const { env = {}, auth0Options = {} } = nextConfig;
  return {
    ...nextConfig,
    env: {
      ...env,
      domain: auth0Options.domain,
      clientId: auth0Options.clientId,
      hostname: auth0Options.hostname,
    },
  };
};
module.exports = withConfig;
