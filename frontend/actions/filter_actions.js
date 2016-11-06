export const UPDATE_BOUNDS = "UPDATE_BOUNDS"
export const UPDATE_DATES = "UPDATE_DATES"

export const updateBounds = (bounds) => ({
	type: UPDATE_BOUNDS,
	bounds
})

export const updateDates = (fromDate, toDate) => ({
	type: UPDATE_DATES,
	fromDate,
	toDate
})
