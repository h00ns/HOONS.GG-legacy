const path = require('path');

const nextConfig = {
  reactStrictMode: false,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  webpack(config, { webpack }) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"]
    });

    config.resolve = {
      alias: {
        '@styles': path.resolve(__dirname, 'styles'),
        '@components': path.resolve(__dirname, 'components'),
        '@utils': path.resolve(__dirname, 'utils'),
        '@apis': path.resolve(__dirname, 'apis'),
        '@hooks': path.resolve(__dirname, 'hooks'),
        '@public': path.resolve(__dirname, 'public'),
        '@static': path.resolve(__dirname, 'static'),
        '@recoil': path.resolve(__dirname, 'recoil'),
        '@constants': path.resolve(__dirname, 'constants'),
      },
      ...config.resolve,

    };
    return config;
  },
}

module.exports = nextConfig
