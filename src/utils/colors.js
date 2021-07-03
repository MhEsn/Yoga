import tools from './tools';

const colors = {
	mainColor: '#e81563',
	black: '#000',
	dimGray: '#696969',
	gray: '#808080',
	darkGray: '#a9a9a9',
	lightGray: '#d3d3d3',
	white: '#fff',
	primary: '#C13179', //'#d01b4b',
	green: '#4CBB17', // kelly green
	greenDark: '#269f42', // bootstrap 4 dark green
	blue: '#007bff', // bootstrap 4 blue
	blueDark: '#0077f7', // bootstrap 4 dark blue
	red: '#dc3545', // bootstrap 4 red
	redDark: '#d53343', // bootstrap 4 dark red
	get primaryDark() {
		return tools.color.darken(this.primary, 10);
	},
	get primaryLight() {
		return tools.color.lighten(this.primary, 85);
	},
	disabled: '#6c757d',
};

export default colors;
