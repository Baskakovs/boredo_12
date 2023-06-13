class PostsByTitleSerializer < ActiveModel::Serializer
  attributes :id, :text, :created_at, :updated_at
  belongs_to :user
  belongs_to :geography
  belongs_to :category
  belongs_to :title
end
