import {initDb} from '../../test/til-server-test-utils'
import * as usersController from '../users';

test('getUsers returns all users in the database', async () => {
  await initDb()
  const req = {}
  const res = {
    json: jest.fn(),
  }
  await usersController.getUsers(req, res);
  expect(res.json).toHaveBeenCalledTimes(1)
})