class PodcastsController < ApplicationController
  def index
    interests = Interest.where(user_id: 1, interestable_type: "Podcast")
    podcasts_embed = interests.map { |x| x.interestable.podcast_embed }
    render :json => podcasts_embed
  end
end
