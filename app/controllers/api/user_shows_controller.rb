class Api::UserShowsController < ApplicationController
  def index
    @user_shows = User.find(params[:id]).find_user_shows(params[:fromDate], params[:toDate], params[:bounds])
  end

  def create

  end

  def update

  end
end
