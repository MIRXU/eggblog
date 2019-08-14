/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1551072440599_1970';

  // ejs模版
  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };
  config.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  };
  // add your middleware config here
  config.middleware = [
    'robot',
    'authLogin'
    // 'csrf_auth'
  ];
  config.security= {
    csrf: {
      enable: false,
    },
  }
	config.mysql={
      // 单数据库信息配置
      client: {
                // host
        host: 'localhost',
                // 端口号
        port: '3306',
                // 用户名
        user: 'root',
                // 密码
        password: 'root',
                // 数据库名
        database: 'blog',
      },
            // 是否加载到 app 上，默认开启
        app: true,
            // 是否加载到 agent 上，默认关闭
        agent: false,
  },
  config.baseUrl = 'http://www.phonegap100.com';
  config.baseImgUrl = 'https://image.baidu.com/search/acjson';
   config.bookUrl='http://www.zshu.net/zshu/article-7828-c/';
  config.uplaodBasePath="app/public/upload"
  // 配置上传
  config.multipart = {
    fileSize: '50mb',
    mode: 'stream',
    fileExtensions: ['.xls', '.txt','.png','.jpg'], // 扩展几种上传的文件格式
  };

  exports.robot = {
    ua: [
      /Baiduspider/i,
    ],
  };
  exports.cluster = {
    listen: {
      port: 7777,
      hostname: '127.0.0.1',
      // path: '/var/run/egg.sock',
    }
  }
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
