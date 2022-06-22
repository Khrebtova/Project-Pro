class ProjecEmployeeSerializer < ActiveModel::Serializer
    attributes :id, :name, :completed, :client    
    
end