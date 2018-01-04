import {buildJuncturesEditRoute} from './routes';

describe('buildJuncturesEditRoute', () => {
    it('should return a router string by default', () => {
        expect(buildJuncturesEditRoute())
			.toEqual('/junctures/:id/edit');
    });

    it('should return a juncture id route path', () => {
        expect(buildJuncturesEditRoute('abcd'))
			.toEqual('/junctures/abcd/edit');
    });
});
