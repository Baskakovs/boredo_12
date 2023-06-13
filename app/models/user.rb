class User < ApplicationRecord
    has_many :posts
    has_many :comments
    has_many :subcomments

    attr_accessor :skip_password_validation

    def skip_password_validation
      @skip_password_validation ||= false
    end
    
    has_secure_password
    validate :password_complexity, if: -> { @skip_password_validation != true }
    validates :email, presence: true, uniqueness: true, format: { with:
    URI::MailTo::EMAIL_REGEXP }
    validate :date_of_birth_cannot_be_in_the_future
    has_many :posts

    private

    def date_of_birth_cannot_be_in_the_future
        if date_of_birth.present? && date_of_birth > Date.today
          errors.add(:date_of_birth, "can't be in the future")
        end
    end

    def password_complexity
        if password.present? and not password.match(PASSWORD_REQUIREMENTS)
            errors.add :password, "must include at least one lowercase letter, one uppercase letter, and one digit"
        end
    end

    PASSWORD_REQUIREMENTS = /\A
    (?=.{8,})          # Must contain 20 or more characters
    (?=.*\d)            # Must contain a digit
    (?=.*[a-z])         # Must contain a lowercase character
    (?=.*[A-Z])         # Must contain an uppercase character
    (?=.*[[:^alnum:]])  # Must contain a symbol
  /x

end