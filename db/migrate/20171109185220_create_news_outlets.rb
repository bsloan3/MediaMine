class CreateNewsOutlets < ActiveRecord::Migration[5.1]
  def change
    create_table :newsoutlets do |t|
      t.string :outlet_name

      t.timestamps
    end
  end
end
