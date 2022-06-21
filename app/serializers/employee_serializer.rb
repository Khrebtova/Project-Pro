class EmployeeSerializer < ActiveModel::Serializer
  attributes :id, :name, :title, :projects_count
  # has_many :projects
end
