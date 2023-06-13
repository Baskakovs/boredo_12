class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.date :date_of_birth
      t.string :password_digest
      t.boolean :google
      t.string :—no-testframework

      t.timestamps
    end
  end
end
