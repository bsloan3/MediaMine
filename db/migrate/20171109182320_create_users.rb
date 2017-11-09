class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username, unique:true, null:false
      t.string :email, unique: true, null:false
      t.string :password_digest, null:false
      t.string :phone_number

      t.timestamps
    end
  end
end
