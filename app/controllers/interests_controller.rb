class InterestsController < ApplicationController

  def addpodcast
    @user = current_user

    @new_podcast = Interest.new(user: user, interestable: podcast)

    render json: @new_podcast
  end


end
