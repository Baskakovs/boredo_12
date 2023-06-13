class Category < ApplicationRecord
    belongs_to :geography
    has_many :titles
    has_many :posts
end
