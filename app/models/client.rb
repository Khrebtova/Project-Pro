class Client < ApplicationRecord
    has_many :projects, dependent: :destroy
    has_many :employees, through: :projects

    validates :name, presence: true, uniqueness: true
    
    def projects_count
        self.projects.count
    end  
end
