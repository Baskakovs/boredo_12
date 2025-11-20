class AddDateOfBirthToUsers < ActiveRecord::Migration[6.1]
  def change
    unless column_exists?(:users, :date_of_birth)
      add_column :users, :date_of_birth, :date
    end
  end
end
