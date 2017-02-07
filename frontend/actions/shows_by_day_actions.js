export const RECEIVE_SHOWS_BY_DATE = "RECEIVE_SHOWS_BY_DATE";
export const FETCH_SHOWS_BY_DATE = "FETCH_SHOWS_BY_DATE";
export const REMOVE_SHOWS_BY_DAY = "REMOVE_SHOWS_BY_DAY";


export const receiveShowsByDate = (ShowsByDay) => ({
	type: RECEIVE_SHOWS_BY_DATE,
	ShowsByDay
});

export const fetchShowsByDate = () => {
	return ({
	type: FETCH_SHOWS_BY_DATE,
})};

export const removeShowsByDay = () => ({
	type: REMOVE_SHOWS_BY_DAY	
})