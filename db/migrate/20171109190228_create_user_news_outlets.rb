class CreateUserNewsOutlets < ActiveRecord::Migration[5.1]
  def change
    create_table :user_news_outlets do |t|
      t.references :user, foreign_key: true
      t.references :news_outlet, foreign_key: true

      t.timestamps
    end
  end
end
