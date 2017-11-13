class InterestsController < ApplicationController

  # def addpodcast
  #   @podcast = Podcast.create!()
  #   @new_podcast = Interest.new(user: user, interestable: podcast)
  #   render json: @new_podcast
  # end

  def addmovie
    @movie = Movie.create!(movie_name: params[:movie][:movie_name],
    movie_date: params[:movie][:movie_date],
    movie_image: params[:movie][:movie_image])
    @new_movie = Interest.new(user_id: params[:user_id].to_i, interestable: @movie)
    if @new_movie.save
      render json: @new_movie
    else
      render json: @new_movie.errors
    end
  end

  def 
end
