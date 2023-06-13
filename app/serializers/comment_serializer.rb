class CommentSerializer < ActiveModel::Serializer
  attributes :id, :user, :text, :created_at

  def attributes(*args)
    hash = super
    hash[:subcomments] = ActiveModel::SerializableResource.new(object.subcomments, each_serializer: SubcommentSerializer)
    hash
  end
end
