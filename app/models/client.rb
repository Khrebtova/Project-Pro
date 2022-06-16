class Client < ApplicationRecord
    has_many :projects
    has_many :employees, through: :projects

    validates :name, presence: true, uniqueness: true
    
end
