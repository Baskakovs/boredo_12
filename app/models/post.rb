class Post < ApplicationRecord
    belongs_to :geography
    belongs_to :user
    belongs_to :geography
    belongs_to :category
    belongs_to :title
    has_many :comments

    #validations
    validates :text, presence: true
    validates :user_id, presence: true
end
