class User < ApplicationRecord
    has_secure_password
    has_many :todos
    validates :username, presence: true, uniqueness: true
    validates :first_name, :last_name, :role, presence: true
end
