class AddPostsPublished < ActiveRecord::Migration[6.1]
  def change
    unless column_exists?(:posts, :published)
      add_column :posts, :published, :boolean
    end
  end
end
