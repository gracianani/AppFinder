class CreateApps < ActiveRecord::Migration
  def change
    create_table :apps do |t|
      t.string :icon_url
      t.string :title
      t.string :developer
      t.float :ratings
      t.string :screenshot_url
      t.string :short_discription
      t.string :long_description
      t.integer :like_count
      t.string :video_url

      t.timestamps
    end
  end
end
