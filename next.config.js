const { parsed: localEnv } = require("dotenv").config();

module.exports = {
  swcMinify: true,
  webpack: (config, { webpack }) => {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    return config;
  },
  compiler: {
    styledComponents: true,
  },
};
