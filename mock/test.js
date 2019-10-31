let Mock = require('mockjs');
const RANDOM = Mock.Random;
const NEWDATA = creatData(200);

module.exports = [{
    url: '/testMock/testPost',
    method: 'post',
    type: 'func',
    response: req => {
        return {
            code: '0',
            data: {
                doce: '测试域的请求',
                list: NEWDATA
            }
        }
    }
}, {
    url: '/zy/testPost',
    method: 'post',
    type: 'func',
    response: req => {
        return {
            code: '0',
            data: {
                doce: '主域的请求',
                list: NEWDATA
            }
        }
    }
}, {
    url: '/realMock/testPost',
    method: 'post',
    type: 'func',
    response: req => {
        return {
            code: '0',
            data: {
                doce: '真实域名的请求',
                list: NEWDATA
            }
        }
    }
}]


/**
 * 创建随机数据
 * @param {Number} count  条数
 */
function creatData(count) {
    let List = []
    for (let i = 0; i < count; i++) {
        List.push(Mock.mock({
            xh: i + 1,
            dylyh: RANDOM.word(3, 5),
            scr: RANDOM.cname(),
            jydxywy: RANDOM.cname(),
            scsj: RANDOM.datetime('yyyy-MM-dd A HH:mm:ss'),
            zt: RANDOM.integer(0, 2)
        }))
    }
    return List;
}