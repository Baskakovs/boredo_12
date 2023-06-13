class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :date_of_birth, :google
end
