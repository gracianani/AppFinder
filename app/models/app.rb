class App < ActiveRecord::Base
  attr_accessible :developer, :icon_url, :like_count, :long_description, :ratings, :screenshot_url, :short_discription, :title, :video_url
end
