class Employee < ApplicationRecord
    has_many :projects, dependent: :destroy
    has_many :clients, through: :projects

    validates :name, :title, presence: true

    def projects_count
        self.projects.count
    end
    
end
