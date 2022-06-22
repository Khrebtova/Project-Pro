class ClientSerializer < ActiveModel::Serializer
  attributes :id, :name, :projects_count, :projects
 
end
