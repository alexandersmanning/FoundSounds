class Api::ArtistsController < ApplicationController
  def index
    @artists = Artist.find_like_names(params[:artistName])
  end
end
