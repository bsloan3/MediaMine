class NewsController < ApplicationController
  def index
    # interests = Interest.where(user_id: 1, interestable_type: "NewsOutlet")
    # news_embed = interests.map { |x| x.interestable.podcast_embed }
    # render :json => news_embed
  end
end
