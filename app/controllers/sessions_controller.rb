class SessionsController < ApplicationController
  def new

  end

  def create
    @user = User.find_by(email: params[:user][:email])
    render json: @user
    if @user && @user.authenticate(params[:user][:password])
      session[:user_id]  = @user.id
    else
      if @user
        @errors = "Sorry, wrong password. Please try again."
      else
        @errors = "Sorry, wrong email. Please try again."
      end
    end
  end

  def delete
    puts "hello!"
    session.clear
  end
end
