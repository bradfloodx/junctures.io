const THEME = {
	primary: 'hsla(2, 85%, 65%, 1)',
	primaryTint: 'hsla(2, 85%, 60%, 1)',
	white: 'hsla(0, 0%, 100%, 1)',
	base: 'hsla(0, 0%, 90%, 1)',
};

export const COLORS = {
	body: {
		background: THEME.base,
		color: 'hsla(212, 12%, 31%, 1)',
		links: {
			color: THEME.primary,
		},
		actions: {
			primary: {
				color: 'hsla(29, 63%, 52%, 1)',
			},
			secondary: {
				color: 'hsla(280, 25%, 60%, 1)',
			}
		},
	},
	header: {
		background: THEME.primary,
		links: {
			color: THEME.white,
			hoverBackground: THEME.primaryTint,
		},
	},
	heading: {
		color: 'hsla(0, 0%, 60%, 1)',
	},
};

export const FONT_SIZES = {
	small: 14,
	base: 16,
	title: 32,
};
