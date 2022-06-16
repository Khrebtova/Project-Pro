class EmployeeSerializer < ActiveModel::Serializer
  attributes :id, :name, :title
  has_many :projects
end
