class Api::ArtistsController < ApplicationController
  def index
    @artists = Artist.find_like_names(params[:artistName])
  end

  def show
    @artist = Artist.find(params[:id])
  end
end
