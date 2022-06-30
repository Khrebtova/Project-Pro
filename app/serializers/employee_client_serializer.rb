class EmployeeClientSerializer < ActiveModel::Serializer
    attributes :id, :name, :title,  :clients, :projects
    
end