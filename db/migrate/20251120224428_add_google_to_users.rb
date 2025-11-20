class AddGoogleToUsers < ActiveRecord::Migration[6.1]
  def change
    unless column_exists?(:users, :google)
      add_column :users, :google, :boolean
    end
  end
end
