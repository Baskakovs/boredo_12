class PostWithCommentsSerializer < ActiveModel::Serializer
  attributes :id, :text, :title, :category, :geography, :user, :created_at
  has_many :comments, serializer: CommentSerializer
end

