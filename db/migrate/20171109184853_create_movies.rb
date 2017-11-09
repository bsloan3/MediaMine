class CreateMovies < ActiveRecord::Migration[5.1]
  def change
    create_table :movies do |t|
      t.string :movie_name

      t.timestamps
    end
  end
end
