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


  describe "GET #show" do
    before(:each) do
       ["Tyvek", "Delicate Steve", "Cate Le Bon"].each_with_index do |artist_name, idx|
        Artist.create!(id: idx, name: artist_name, api_id: idx)
      end
    end

    it "responds successfully with an HTTP 200 status code" do
      get :show, id: 1
      expect(response).to be_success
      expect(response).to have_http_status(200)
    end

    it "renders the show template for a specified artist" do
      get :show, id: 1
      expect(response).to render_template("show")
    end

    it "filters to artists that match id" do
      artist = Artist.create!(id: 50000, name: "Ty Segall", api_id: 50000)

      get :show, id: 50000

      expect(assigns(:artist)).to eq(artist)
    end
  end
end