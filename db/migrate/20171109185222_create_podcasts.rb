class CreatePodcasts < ActiveRecord::Migration[5.1]
  def change
    create_table :podcasts do |t|
      t.string :podcast_name

      t.timestamps
    end
  end
end
