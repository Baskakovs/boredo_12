class CreateGeographies < ActiveRecord::Migration[6.1]
  def change
    create_table :geographies do |t|
      t.string :name
      t.string :—no-testframework

      t.timestamps
    end
  end
end
