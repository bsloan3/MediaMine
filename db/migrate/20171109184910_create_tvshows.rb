class CreateTvshows < ActiveRecord::Migration[5.1]
  def change
    create_table :tvshows do |t|
      t.string :show_name

      t.timestamps
    end
  end
end
