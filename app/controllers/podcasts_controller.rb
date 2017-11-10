class PodcastsController < ApplicationController
  def index
    podcasts = Podcast.all.limit(10)
    render :json => podcasts
  end
end
