const mode = 'dev'; // dev or prod
const devUrl = 'localhost:3001';
const prodUrl = '';

export default {
	server: {
		api: {
			// url: mode === 'dev' ? `http://${devUrl}:3001` : `http://${prodUrl}:3003`,
			url: mode === 'dev' ? `http://${devUrl}` : `http://${prodUrl}`,
			port: 3003,
		}
	},
	apiBaseUrl: mode === 'dev' ? 'localhost:3001' : prodUrl,
	mode: mode
};
