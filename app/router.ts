import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/cc', controller.home.index);
  // router.post('/user', controller.home.addUser);
  // router.put('/user', controller.home.updateUser);
  // router.delete('/user', controller.home.deleteUser);
};
