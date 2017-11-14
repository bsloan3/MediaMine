class CalendarEventController < ApplicationController

  def index
    database_events = CalEvents.where(user_id: params[:id])
    render :json => database_events.to_json
  end

  def create
    @user = User.find_by(email: params[:user][:email])
    @new_event = CalEvent.new(user: @user, title: params[:title], description: params[:description], start: params[:start], end: parmams[:end])
    if @new_event.save
      render json: @new_event
    else
      render json: @new_event.errors
    end
  end
end
