const TWO_WEEKS = 6048e5;
const LOCAL_TIME = 2.88e+7;
const MAX_DATE = 3.154e+10;
const MIN_DATE = 6.307e+11

export const getDefaultToDate = () => {
	return dateToString(new Date(+new Date + TWO_WEEKS));
};

export const getDefaultFromDate = () => {
	return dateToString(new Date());
}

export const getMaxDate = () => {
	return dateToString(new Date(+new Date + MAX_DATE));
};

export const getMinDate = () => {
	return dateToString(new Date(+new Date - MIN_DATE));
};

export const dateToString = (date) => {
	return date.toISOString().substring(0, 10);
}

export const formatDate = (date) => {
	return date.toLocaleDateString("US", 
		{format: "weekday, month, day", 
		 weekday: "long", 
		 month: "long", 
		 day: "numeric" }
		);
};

export const displayDate = (dateValue) => {
	return formatDate(new Date(+new Date(dateValue) + LOCAL_TIME));
}