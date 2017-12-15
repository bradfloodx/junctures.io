export default {
	home: {
		title: 'Home',
		path: '/'
	},
	register: {
		title: 'Register',
		path: '/register'
	},
	signIn: {
		title: 'Sign In',
		path: '/sign-in'
	},
	juncturesCreate: {
		title: 'Create',
		path: '/junctures/new'
	},
	junctures: {
		title: 'Junctures List',
		path: '/junctures'
	},
	juncturesEdit: {
		title: 'Edit',
		path: buildJuncturesEditRoute()
	}
};

export function buildJuncturesEditRoute(id = ':id') {
	return `/junctures/${id}/edit`;
}
