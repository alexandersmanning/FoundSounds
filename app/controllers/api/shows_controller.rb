class Api::ShowsController < ApplicationController
  def index
    @shows = Show.find_shows_by_date(params[:fromDate], params[:toDate])
  end

  def show
  end
end
