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
    const aa = await data.create({
      ss: `hi,${name}`,
    });
    const bb = await data.find();
    return {
      code: 0,
      msg: `hi,${name}`,
      v: aa,
      a: bb,
    };
  }
}
