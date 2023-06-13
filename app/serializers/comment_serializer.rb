class CommentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :text, :post_id
end
