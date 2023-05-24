const path = require('path')

const config = {
    i18n: {
        defaultLocale: 'ko',
        locales: ['ko', 'en'],
        defaultNS: 'common',
        localeDetection: true,
        localePath: path.resolve('./public/locales')
    },
};

module.exports = config;