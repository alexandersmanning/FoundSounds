class Api::VenuesController < ApplicationController
  def show
    @venue_shows = Show.find_shows_by_venue(
        params[:id],
        params[:fromDate],
        params[:toDate],
        params[:userId],
        params[:artistId]
      )
  end
end
