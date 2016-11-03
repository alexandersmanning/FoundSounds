class Api::ShowsController < ApplicationController
  def index
    @shows = Show.find_shows_by_date(params[:date_from], params[:date_to])
  end

  def show
  end
end
