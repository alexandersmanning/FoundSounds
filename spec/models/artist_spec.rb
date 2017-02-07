require 'rails_helper'

RSpec.describe Artist, :type => :model do
  describe "find_like_names" do

    before(:each) do
      ["Tyvek", "Delicate Steve", "Cate Le Bon"].each_with_index do |artist_name, idx|
        Artist.create!(name: artist_name, api_id: idx)
      end
    end

    it 'finds artists that start with the name' do
      artists = Artist.find_like_names("Tyvek")
      expect(artists.first["name"]).to eq("Tyvek")
    end

    it 'finds artists that end with the name' do
      artists = Artist.find_like_names("eve")
      expect(artists.first["name"]).to eq("Delicate Steve")
    end

    it 'finds artists that contain the name' do
      artist_names = Artist.find_like_names("cate").map do |obj|
        obj.name
      end

      expect(artist_names.sort).to eq(["Cate Le Bon", "Delicate Steve"])
    end

    it 'finds names ignoring case' do
      artists = Artist.find_like_names("TYVEK")
      expect(artists.first["name"]).to eq("Tyvek")
    end

    it 'finds no artists with an empty string' do
      artists = Artist.find_like_names("")
      expect(artists.length).to eq(0)
    end

    it 'finds no artists with nil' do
      artists = Artist.find_like_names(nil)
      expect(artists.length).to eq(0)
    end


  end

end