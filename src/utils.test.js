import { displayDistance } from './utils';

Date.now = jest.fn(() => 1514958752761);

it('should return the correct distance as a string', function () {
	expect(displayDistance('2018-07-15', '15:01')).toEqual('6 months, 11 days 23 hours 8 minutes');
});
