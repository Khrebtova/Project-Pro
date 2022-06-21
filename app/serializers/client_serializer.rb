class ClientSerializer < ActiveModel::Serializer
  attributes :id, :name, :projects_count

  # has_many :projects
end
