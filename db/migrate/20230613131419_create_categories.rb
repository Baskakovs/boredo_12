class CreateCategories < ActiveRecord::Migration[6.1]
  def change
    create_table :categories do |t|
      t.string :name
      t.integer :geography_id
      t.string :—no-testframework

      t.timestamps
    end
  end
end
