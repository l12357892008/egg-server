import { Application } from 'egg';

export default (app: Application) => {
  const mongoose = app.mongoose;
  mongoose.connect('mongodb://localhost/demo');
  /** 可以写，但没必要, 连接失败直接就启动失败了 */
  // const db = mongoose.connection;
  // db.on('error', console.error.bind(console, '连接失败'));
  // db.once('open', () => {
  //   console.log('连接成功');
  // });
  const Scheme = mongoose.Schema;
  const ss = new Scheme({
    ss: String,
    createdAt: {
      type: Number,
      default: Date.now(),
    },
  }, {
    versionKey: false,
    // _id: false,
    // timestamps: {
    //   createdAt: 'createdAt',
    //   updatedAt: 'qq',
    // },
    timestamps: true,
    toObject: {
      virtuals: true,
    },
  });

  return mongoose.model<any>('Fuck', ss, 'fuck');
};
