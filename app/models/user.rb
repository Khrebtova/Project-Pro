class User < ApplicationRecord
    has_secure_password

    validates :username, presence: true, uniqueness: true
    validates :first_name, :last_name, :role, presence: true
end
