require 'byebug'
class PostWithInfoSerializerSerializer < ActiveModel::Serializer
  attributes :id, :text, :published, :created_at, :title, :geography, :user, :comments, :category

end
