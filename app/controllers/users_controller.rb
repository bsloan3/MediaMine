class UsersController < ApplicationController
  def new
    @user = User.new
    render json: @user
  end

  def create
    @user = User.new(username: params[:user][:username], email: params[:user][:email], phone_number: params[:user][:phone_number], password: params[:user][:password])
    if @user.save
      session[:user_id] = @user.id

      render json: @user
    else
      @errors = "Try again."
    end
  end

  def show
    @user = User.find_by(id: params[:id])
  end
end
