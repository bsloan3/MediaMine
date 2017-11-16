class CalendarEventsController < ApplicationController

  def index
    database_events = CalendarEvent.where(user_id: params[:id])
    cal_events = []
    database_events.each do |event|
      cal_events.push({title: event.title, start: event.start, end: event.end})
    end
    render :json => cal_events.to_json
  end

  # def create
  #   @user = User.find_by(user_id: params[:id)
  #   @new_event = CalEvent.new(user: @user, title: params[:title], description: params[:description], start: params[:start], end: parmams[:end])
  #   if @new_event.save
  #     render json: @new_event
  #   else
  #     render json: @new_event.errors
  #   end
  # end
end
