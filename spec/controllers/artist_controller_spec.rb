require "rails_helper"

RSpec.describe Api::ArtistsController, :type => :controller do
  describe "GET #index" do
    it "responds successfully with an HTTP 200 status code" do
      get :index
      expect(response).to be_success
      expect(response).to have_http_status(200)
    end

    it "renders the index template" do
      get :index
      expect(response).to render_template("index")
    end

    it "filters to artists that match artistName" do
      artists = ["Delicate Steve", "Cate Le Bon"].each_with_index.map do |artist_name, idx|
        Artist.create!(name: artist_name, api_id: idx)
      end

      Artist.create!(name: "Tyvek", api_id: 50000)

      get :index, {artistName: "cate"}

      expect(assigns(:artists)).to match_array(artists)
    end
  end
end