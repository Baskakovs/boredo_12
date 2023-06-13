require "byebug"
class GeographySerializer < ActiveModel::Serializer
  attributes :id, :name
end
