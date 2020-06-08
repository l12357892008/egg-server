import { Service } from 'egg';

/**
 * Test Service
 */
export default class Test extends Service {

  /**
   * sayHi to you
   * @param name - your name
   */
  public async sayHi(name: string) {
    const { ctx } = this;
    const data = ctx.model.New;
    // const aa = await data.create({ // 添加一条数据
    //   ss: `hi,${name}`,
    // });
    // const bb = await data.find(); // 获取表中所有数据
    const cc = await data.find({ ss: /^bbb/ }); // 查找ss为bbb开头的数据
    return {
      code: 0,
      msg: `hi,${name}`,
      // aa,
      // bb,
      cc,
      power: [{
        path: '/wu',
        name: 'wu',
      },
      {
        path: '/hel',
        name: 'hel',
      },
      ],
    };
  }
}
