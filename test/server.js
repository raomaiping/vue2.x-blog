/**
 * @description jest server
 * @author 前端小菜鸟吖
 */

const request = require('supertest')
const server = require('../src/app').callback()

module.exports = request(server)
