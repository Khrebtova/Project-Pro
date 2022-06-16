class Employee < ApplicationRecord
    has_many :projects
    has_many :clients, through: :projects

    validates :name, :title, presence: true
end
