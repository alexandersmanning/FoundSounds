export const RECEIVE_SHOW = "RECEIVE_SHOW";
export const FETCH_SHOW_BY_ID = "FETCH_SHOW_BY_ID";


export const receiveShow = (show) => ({
	type: RECEIVE_SHOW,
	show
});

export const fetchShowById = (id) => ({
	type: FETCH_SHOW_BY_ID,
	id
});