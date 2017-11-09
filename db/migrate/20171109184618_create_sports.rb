class CreateSports < ActiveRecord::Migration[5.1]
  def change
    create_table :sports do |t|
      t.string :sport_name
      t.string :team_name
      t.string :league_name
      t.string :division_name

      t.timestamps
    end
  end
end
