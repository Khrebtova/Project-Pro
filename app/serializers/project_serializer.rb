class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :completed
  has_one :client
  has_one :employee
end
