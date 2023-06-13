class CreateSubcomments < ActiveRecord::Migration[6.1]
  def change
    create_table :subcomments do |t|
      t.integer :user_id
      t.integer :comment_id
      t.integer :post_id
      t.string :text

      t.timestamps
    end
  end
end
