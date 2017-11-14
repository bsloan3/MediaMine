class InterestsController < ApplicationController

  def addpodcast
    @podcast = Podcast.find_by(name: params[:podcast][:podcast_name])
    @new_podcast = Interest.new(user_id: params[:user_id].to_i, interestable: @podcast)
    if @new_podcast.save
      render json: @new_podcast
    else
      render json: @new_podcast.errors
    end
  end

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

  def addnews
    @news = NewsOutlet.create!(outlet_name: params[:news][:outlet_name])
    @new_news = Interest.new(user_id: params[:user_id].to_i,
      interestable: @news)
    if @new_news.save
      render json: @new_news
    else
      render json: @new_news.errors
    end
  end


end
