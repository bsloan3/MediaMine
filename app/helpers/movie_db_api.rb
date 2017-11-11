def title_search(title)
  Tmdb::Api.key("2f70af6d0463402e0b8e1e15f0af5457")
  Tmdb::Api.language("en")
  Tmdb::Movie.find(title)
end
