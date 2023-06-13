class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authorize, only: [:create]
  def authorize 
    render json: { errors: "Not authorized" }, status: :unauthorized unless session.include? :user_id
  end

end
