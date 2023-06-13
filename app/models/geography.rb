class Geography < ApplicationRecord
    has_many :categories
    has_many :titles, through: :categories
    has_many :posts
end
