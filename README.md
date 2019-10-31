启动 npm run start
打包 npm run build

# axios-domain
由当前仓库的webpack模版工程搭建的vue项目，此axios拓展 基于vue 演示
此拓展可方便项目中多个接口站点的请求服务 与每个环境无关实现结偶 此处 staticConfig文件夹会被打包至打包文件夹内 如若有不同的环境 比如说开发环境 测试环境 与发布环境 都可以在打包发布的时候去将此文件进行修改就可以  无需在像以前一样配置webpack的环境变量 根据不同环境执行不同环境的打包命令等过于麻烦的步骤


中心技术点在 /src/services 文件夹内 

>> ----- axios.config.js ------ 此文件为 具体域的配置文件
>> ----- http.js ------ 此文件为 分域拓展的核心文件 一般不用修改
>> ----- servicesConfig.js ----- 此文件为请求url地址的常量定义文件


>> 使用方法：
 在axios.config.js中配置好分域后可以直接在 .vue文件中使用 也可以在任何地方使用 使用方式不同

## 配置分域 
```
主域：配置在commonConfig中 调用方式是使用$http.post 或者 ¥http.get等
分域：配置在root下 调用方式是使用 $+分域名 比如此处的realMock 调用就使用$realMock.post等

const conf = {
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
```

## .vue组件中使用方法

```
    // 此处的$testMock就是在配置文件中配置的分域名  调用就直接 $+分域的名称就可以
    
    import Services from "@/services/serviceConfig";

    export default {
        mounted() {
            this.$testMock
                .post(Services.zy.TESTPOST, {})
                .then(ret => {
                    console.log("测试域请求回调", ret.data.data);
                })
                .catch(err => {
                    console.log("error-from-cs.vue");
                });
        }
    };
```

## 在action中使用或者在非组件内使用 

```
    import http from "@/services/http";
    import Services from '@/services/serviceConfig'

    export function getData({ commit, state }) {
        return new Promise((resolve, reject) => {
            http.$realMock
            .post(Services.real.TESTPOST)
            .then(ret => {
                resolve(ret);
            })
            .catch(err => {
                reject(err);
            })
        })
    }
```
