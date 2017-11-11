class CreateMovies < ActiveRecord::Migration[5.1]
  def change
    create_table :movies do |t|
      t.string :movie_name
      t.string :movie_date
      t.string :movie_image

      t.timestamps
    end
  end
end
