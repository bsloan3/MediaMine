def title_search(title)
  Tmdb::Api.key("#")
  Tmdb::Api.language("en")
  Tmdb::Movie.find(title)
end
