class PodcastsController < ApplicationController
  def index
    interests = Interest.where(user_id: params[:id], interestable_type: "Podcast")
    podcasts_embed = interests.map { |x| x.interestable.podcast_embed }
    render :json => podcasts_embed.to_json
  end

  def home
    @podcasts = Podcast.all
    if params[:search]
      @podcast = Podcast.search(params[:search]).order("created_at DESC").uniq
    else
      @podcast = Podcast.all.order("created_at DESC").uniq
    end
    render json: @podcast
  end


end
