class MoviesController < ApplicationController
  def index
    interests = Interest.where(user_id: params[:id], interestable_type: "Movie")
    movies = interests.map do |i|
      {
        movie_name: i.interestable.movie_name,
        movie_date: i.interestable.movie_date,
        movie_image: i.interestable.movie_image
      }
    end
    render :json => movies.to_json
  end
end
