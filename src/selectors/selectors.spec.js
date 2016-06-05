import expect from 'expect';
import {authorsFormattedForDropdown} from './selectors';

describe('Author Selectors', () => {
  describe('authorsFormattedForDropdown', () => {
    it('should return author data formatted for use in a dropdown', () => {
      const authors = [
        {id: 'cory-house', firstName: 'Cory', lastName: 'House'},
        {id: 'joe-momma', firstName: 'Joe', lastName: 'Momma'}
      ];
      const expected = [
        {value: 'cory-house', text: 'Cory House'},
        {value: 'joe-momma', text: 'Joe Momma'}
      ];
      expect(authorsFormattedForDropdown(authors)).toEqual(expected);
    });
  });
});
