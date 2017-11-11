class NewsController < ApplicationController
  def index
    news_sources = Interest.where(user_id: params[:id], interestable_type: "NewsOutlet")
    news_embed = news_sources.map { |x| x.interestable.outlet_name }
    render :json => news_embed.to_json
  end
end
