// 开发环境跨域代理设置
const getLocalIp = require('./getLocalIp');

module.exports = {
    dev: [
        // 直连后端打开注释
        {
          context: [`/api/**`],
          target: 'http://rest.apizza.net/mock/',
          changeOrigin: true,
          pathRewrite: {
            '^/api': '',
          },
          cookieDomainRewrite: getLocalIp(),
        },
      ],
}