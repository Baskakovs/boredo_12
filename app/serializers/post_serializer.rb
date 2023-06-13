class PostSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :text, :category_id, :geography_id, :title_id, :"—no-testframework"
end
