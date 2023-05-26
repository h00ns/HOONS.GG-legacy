const path = require('path');
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: false,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
<<<<<<< HEAD
    domains: ['ddragon.leagueoflegends.com', 'raw.communitydragon.org']
=======
    domains: ['ddragon.leagueoflegends.com']
>>>>>>> main
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
        '@customType': path.resolve(__dirname, 'customType')
      },
      ...config.resolve,

    };
    return config;
  },
  i18n, // 다국어 지원
}

module.exports = nextConfig
