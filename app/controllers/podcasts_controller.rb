class PodcastsController < ApplicationController
  def index
    interests = Interest.where(user_id: params[:id], interestable_type: "Podcast")
    podcasts_embed = interests.map { |x| x.interestable.podcast_embed }
    render :json => podcasts_embed.to_json
  end

  def home
    @podcasts_all = Podcast.all
    if params[:search]
      @podcast_search = Podcast_all.search(params[:search]).order("created_at DESC").uniq
      @podcast = @podcast_search [0..2]
    else
      @podcast = Podcast.all.order("created_at DESC").uniq
      @podcast = @podcast_search [0..2]
    end
    render json: @podcast
  end


end
