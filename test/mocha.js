const { add, mul, cover } = require('../src/math')

const assert = require('assert')

// 需要安装 npm i mocha -D
//  在package.json 中配置"mocha": "mocha test/mocha.js"
describe('#math', () => {
  // 测试加法
  describe('#add()', function() {
    it('add(2,3) equal 5', function() {
      assert.equal(add(2, 3), 5)
    })
    // only 表示 只执行 这一个
    // it.only('add(2,3) equal 5', function() {
    //   assert.equal(add(2,3),5)
    // })
    //  skip 说明 跳过这个 不测试这个
    // it.skip('add(2,-3) equal -1', function() {
    //   assert.equal(add(2,-3),-1)
    // })
    it('add(2,-3) equal -1', function() {
      assert.equal(add(2, -3), -1)
    })
  })

  // 测试减法
  describe('#mul()', function() {
    it('mul(2,3) equal 6', function() {
      assert.equal(mul(2, 3), 6)
    })
  })

  // 测试覆盖率
  // 安装 npm i istanbul -D
  // 需要在 package 配置脚本
  describe('#cover()', function() {
    it('cover(3,2) equal 1', function() {
      assert.equal(cover(3, 2), 1)
    })

    it('cover(3,3) equal 3', function() {
      assert.equal(cover(3, 3), 3)
    })

    it('cover(2,4) equal 6', function() {
      assert.equal(cover(2, 4), 6)
    })
  })
})
