class CalendarEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :calendar_events do |t|
      t.references :user, foreign_key: true
      t.string :title, null: false
      t.string :description
      t.datetime :start, null: false
      t.datetime :end, null: false

      t.timestamps
    end
  end
end
