class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :name
      t.text :description
      t.boolean :completed
      t.belongs_to :client, null: false, foreign_key: true
      t.belongs_to :employee, null: false, foreign_key: true

      t.timestamps
    end
  end
end
