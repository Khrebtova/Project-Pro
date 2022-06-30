class TodoSerializer < ActiveModel::Serializer
  attributes :id, :name, :completed
  has_one :user
end
