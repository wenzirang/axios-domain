/**
 * 服务调用对象配置
 * @type {Object}
 */
const conf = {
  // 主域
  commonConfig: {
    baseURL: '/zy/',
    timeout: 5000
  },
  root: {
    // 测试mock域
    testMock: {
      baseURL: '/testMock/',
      timeout: 2000,
    },
    // 真实mock请求域
    realMock: {
      baseURL: '/realMock/',
      timeout: 2000
    }
  }
}

// 静态配置对象，此对象在 /staticConfig/app-conf.js 内配置
const appConf = window.APP_CONF

// 将优先的静态配置覆盖本配置
function overrideConf() {
  let urls = (appConf || appConf.baseURL)
  let root = conf.root
  if (urls) {
    for (let key in urls) {
      if (key in root) {
        root[key].baseURL = urls[key]
      }
    }
  }
}

// 调整配置优先级
overrideConf()

export default conf
