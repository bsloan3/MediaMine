class UserMedia < ActiveRecord::Migration[5.1]
  def change
    create_table :user_podcasts do |t|
      t.references  :user, foreign_key: true
      t.references :mediable, polymorphic: true, index: true

      t.timestamps
    end
  end
end
