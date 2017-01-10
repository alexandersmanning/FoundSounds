export const SELECT_MARKER = "SELECT_MARKER";
export const DESELECT_MARKER = "DESELECT_MARKER"

export const selectMarker = (venueId) => ({
	type: SELECT_MARKER,
	venueId
});

export const deselectMarker = (venueId) => ({
	type: DESELECT_MARKER,
	venueId
})