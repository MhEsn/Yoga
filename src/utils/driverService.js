import http from '../utils/http';

function add(model) {
	return http.request(http.base.api, 'api/Driver/Add', model);
}
function edit(model) {
	return http.request(http.base.api, 'api/Driver/Edit', model);
}
function list(model) {
	return http.request(http.base.api, 'api/Driver/List', model);
}
function get(id) {
	return http.request(http.base.api, `api/Driver/Get/${id}`);
}

export default {
	add: add,
	edit: edit,
	list: list,
	get: get
};
