class Api::ShowsController < ApplicationController
  def index
    @shows = Show.find_shows_by_date(
      params[:fromDate],
      params[:toDate],
      params[:bounds],
      params[:userId],
      params[:artistId]
    )
  end

  def show
    @show = Show.find(params[:id])
  end
end
