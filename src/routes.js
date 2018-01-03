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
	signOut: {
		title: 'Sign Out',
		path: '/sign-out'
	},
	juncturesCreate: {
		title: 'Create',
		path: '/junctures/new'
	},
	junctures: {
		title: 'List',
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
