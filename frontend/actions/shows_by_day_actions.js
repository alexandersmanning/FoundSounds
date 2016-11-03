export const RECEIVE_SHOWS_BY_DATE = "RECEIVE_SHOWS_BY_DATE";
export const FETCH_SHOWS_BY_DATE = "FETCH_SHOWS_BY_DATE";


export const receiveShowsByDate = (ShowsByDay) => ({
	type: RECEIVE_SHOWS_BY_DATE,
	ShowsByDay
});

export const fetchShowsByDate = (fromDate, toDate) => ({
	type: FETCH_SHOWS_BY_DATE,
	fromDate,
	toDate
});