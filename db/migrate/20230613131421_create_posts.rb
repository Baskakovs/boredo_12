class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.integer :user_id
      t.string :text
      t.integer :category_id
      t.integer :geography_id
      t.integer :title_id
      t.string :—no-testframework

      t.timestamps
    end
  end
end
