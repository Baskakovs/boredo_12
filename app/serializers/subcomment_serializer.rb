class SubcommentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :comment_id, :post_id, :text, :"—no-testframework"
end
