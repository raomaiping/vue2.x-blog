/**
 * @description user api test
 * @author 前端小菜鸟吖
 */
const server = require('../server')

// 用户信息
const username = `u_${Date.now()}`
const password = `p_${Date.now()}`
const testUser = {
    username,
    password,
    nickName: username,
    gender: 1,
}

// 注册
test('注册一个用户，应该成功', async () => {
    const res = await server.post('/api/user/register').send(testUser)
    expect(res.body.errno).toBe(0)
})

// 重复注册
test('重复注册用户，应该失败', async () => {
    const res = await server.post('/api/user/register').send(testUser)
    expect(res.body.errno).not.toBe(0)
})

// 查询用户是否存在
test('查询注册的用户名，应该存在', async () => {
    const res = await server.post('/api/user/isExist').send({ username })
    expect(res.body.errno).toBe(0)
})
