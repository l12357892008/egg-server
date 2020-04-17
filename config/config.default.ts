import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1587022706957_484';

  // add your egg config in here
  config.middleware = [];
  config.cluster = {
    listen: {
      path: '',
      port: 10086,
      hostname: '0.0.0.0',
    },
  };
  config.mongoose = {
    // 默认连接
    url: 'mongodb://127.0.0.1/test',
    options: {
      // 是否允许连接其他url
      useNewUrlParser: true,
    },
  };
  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: [ '*' ],
  };
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
