class CreateInterests < ActiveRecord::Migration[5.1]
  def change
    create_table :interests do |t|
      t.references :user, foreign_key: true
      t.references :interestable, unique: true, polymorphic: true, index: true

      t.timestamps
    end
  end
end
