class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :date_of_birth, :password_digest, :google, :"—no-testframework"
end
