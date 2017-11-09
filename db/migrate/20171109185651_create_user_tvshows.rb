class CreateUserTvshows < ActiveRecord::Migration[5.1]
  def change
    create_table :user_tvshows do |t|
      t.references :user, foreign_key: true
      t.references :tvshow, foreign_key: true

      t.timestamps
    end
  end
end
