class MoviesController < ApplicationController
  def index
    movies = Interest.where(user_id: params[:id], interestable_type: "Movie")
    movie_data = {}
    movies.each do |movie|
      movie_date = title_search(movie.interestable.movie_name).release_date
      movie_data[movie.interestable.movie_name] = movie_date
    end

    render :json => movie_data.to_json
  end
end
