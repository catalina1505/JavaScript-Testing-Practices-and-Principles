import {initDb} from '../../test/til-server-test-utils';
import * as postsController from './posts';
import db from '../utils/db';

beforeEach(() => initDb())

test('getPosts returns all posts in the database', async() => {
  const req = {}
  const res = {json: jest.fn()}
  await postsController.getPosts(req, res)
  expect(res.json).toHaveBeenCalledTimes(1)
  const allPosts = await db.getPosts()
  expect(res.json).toHaveBeenLastCalledWith({posts: allPosts})
})
