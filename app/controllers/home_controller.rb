class HomeController < ApplicationController
  skip_before_action :authenticate_user!
  before_action :check_auth

  def check_auth
    unless user_signed_in?
      redirect_to :controller => :pages
    end
  end

  def profile

  end
end
