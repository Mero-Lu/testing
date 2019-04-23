const { add, mul } = require('../src/math.js')
// const assert = require('assert')

//  node中的 断言测试  单元测试
// assert.equal(add(1, 1), 2, 'err')

// -------------------------------------
//  Chaijs 测试
const { should, expect, assert } = require('chai')
// should 要先执行一下  第一种
// should()
// add(2, 3).should.be.equal(6)

// 第二种
// expect(add(2, 3)).to.equal(5)

// 第三种
assert.equal(add(2, 3), 5, '报错了')

//  还有一个 mocha 测试  功能测试
