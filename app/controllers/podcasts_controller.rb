class PodcastsController < ApplicationController
  def index
    interests = Interest.where(user_id: params[:id], interestable_type: "Podcast")
    podcasts_embed = interests.map { |x| x.interestable.podcast_embed }
    throttled_podcasts_embed = podcasts_embed[0..2]
    call_index = throttled_podcasts_embed.length
    render :json => {call_index: call_index, data: throttled_podcasts_embed}.to_json
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

  def show
    interests = Interest.where(user_id: params[:user_id], interestable_type: "Podcast")
    call_index_given = params[:id]
    call_index_new = call_index_given.to_i
    podcasts_embed = interests.map { |x| x.interestable.podcast_embed }
    throttled_podcasts_embed = podcasts_embed[0..call_index_new]
    call_index = throttled_podcasts_embed.length
    render :json => {call_index: call_index, data: podcasts_embed}.to_json
  end
end
