/**
 * @description user model test
 * @author 前端小菜鸟吖
 */

const { User } = require('../../src/db/model/index')

test('User 模型的各个属性，符合预期', () => {
    // build 会构建一个内存的 User 实例，但不会提交到数据库中
    const user = User.build({
        username: 'raomaiping',
        password: 'p123123',
        nickName: '前端小菜鸟吖',
        //gender:1,
        picture: '/xxx.png',
        city: '深圳',
        github: 'https://github.com/raomaiping',
        juejin: 'https://juejin.cn/user/588993965598407',
        qq: '2582395486',
        wx: '15979580504',
    })
    // 验证各个属性
    expect(user.username).toBe('raomaiping')
    expect(user.password).toBe('p123123')
    expect(user.nickName).toBe('前端小菜鸟吖')
    expect(user.gender).toBe(3) // 测试 gender 的默认值
    expect(user.picture).toBe('/xxx.png')
    expect(user.city).toBe('深圳')
    expect(user.github).toBe('https://github.com/raomaiping')
    expect(user.juejin).toBe('https://juejin.cn/user/588993965598407')
    expect(user.qq).toBe('2582395486')
    expect(user.wx).toBe('15979580504')
})
