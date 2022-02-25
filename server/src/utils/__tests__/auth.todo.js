import {isPasswordAllowed, userToJSON} from '../auth';

test('isPasswordAllowed only allows some passwords', () => {

  expect(isPasswordAllowed('')).toBe(false);
  expect(isPasswordAllowed('ffff')).toBe(false);
  expect(isPasswordAllowed('8888')).toBe(false);
  expect(isPasswordAllowed('gf65.h.j6')).toBe(true);

})

//Refactor
describe('isPasswordAllowed', () => {
  const allowedPasswords = ['gf65.h.j6'];
  const disallowedPasswords = ['', 'ffff'];

  allowedPasswords.forEach(pass => {
    it('should be allowed', () => {
      expect(isPasswordAllowed(pass).toBe(true))
    })
  })

  disallowedPasswords.forEach(pass => {
    it('should not be allowed', () => {
      expect(isPasswordAllowed(pass).toBe(false))
    })
  })
})

test('userToJSON excludes secure properties', () => {
  const safeUser = {
    id: 'some-id',
    username: 'sarah',
  }
  const user = {
    ...safeUser,
    exp: new Date(),
    iat: new Date(),
    hash: 'some really long string',
    salt: 'some shorter string',
  }
  const jsonUser = userToJSON(user);
  expect(jsonUser).toEqual(safeUser);
})
