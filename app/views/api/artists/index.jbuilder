json.array!(@artists) do |artist|
  json.name artist.name
  json.id artist.id
end