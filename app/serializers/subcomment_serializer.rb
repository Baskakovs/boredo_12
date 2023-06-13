class SubcommentSerializer < ActiveModel::Serializer
  attributes :id, :user, :text, :created_at

  def user
    object.user.name
  end
end