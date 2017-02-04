class Api::UserShowsController < ApplicationController
  def index
    @user_shows = User.find(params[:userId]).find_user_shows()
  end

  def create
    @user_show = UserShow.create(user_show_params)
    render :show
  end

  def update
    @user_show = UserShow.find(params[:id])
    @user_show.update(user_show_params)
    render :show
  end

  def destroy
    @user_show = UserShow.find(params[:id])
    @user_show.destroy
  end

  private
  def user_show_params
    params.require(:user_shows).permit(:user_id, :show_id, :attending)
  end
end
