class SubcommentsController < ApplicationController
    def create
        subcomment = Subcomment.create!(subcomment_params)
        render json: subcomment, status: 201
    rescue ActiveRecord::RecordInvalid => e
        unprocessable_entity(e)
    end

    private

    def subcomment_params
        params.require(:subcomment).permit(:text, :comment_id, :user_id)
    end

    def unprocessable_entity(e)
        render json: { errors: e.record.errors }, status: :unprocessable_entity
    end    
end
