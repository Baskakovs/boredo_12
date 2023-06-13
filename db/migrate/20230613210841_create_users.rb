class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.date :date_of_birth
      t.boolean :google

      t.timestamps
    end
  end
end
