class TitleSerializer < ActiveModel::Serializer
  attributes :id, :name, :geography_id, :category_id
end
