export default {
	home: {
		title: 'Junctures.io',
		path: '/',
		description: 'Index page',
	},
	register: {
		title: 'Register',
		path: '/register',
		description: 'Register a new account on Junctures.io',
	},
	signIn: {
		title: 'Sign In',
		path: '/sign-in',
		description: 'Sign in to your existing Junctures.io account',
	},
	signOut: {
		title: 'Sign Out',
		path: '/sign-out',
		description: 'Sign out of Junctures.io',
	},
	juncturesCreate: {
		title: 'Create',
		path: '/junctures/new',
		description: 'Create a new Juncture',
	},
	junctures: {
		title: 'List',
		path: '/junctures',
		description: 'See your Junctures list',
	},
	juncturesEdit: {
		title: 'Edit',
		path: buildJuncturesEditRoute(),
		description: 'Edit Juncture',
	}
};

export function buildJuncturesEditRoute(id = ':id') {
	return `/junctures/${id}/edit`;
}
