const Mock = require('mockjs');
const RANDOM = Mock.Random;


// 模块mock
import test from './test';

const mockArray = [
    ...test,
]
Mock.setup({
    timeout: '300-600'
})

for (let index = 0; index < mockArray.length; index++) {
    const element = mockArray[index];
    Mock.mock(element.url, element.method, element.response);
}