class CommentsController < ApplicationController
    def create 
        comment = Comment.create!(comment_params)
        render json: comment, status: :created
    rescue ActiveRecord::RecordInvalid => e
        unprocessable_entity(e)
    end

    private

    def comment_params
        params.permit(:text, :user_id, :post_id)
    end

    def unprocessable_entity(e)
        render json: { errors: e.record.errors }, status: :unprocessable_entity
    end
end
