class UserNewsOutlet < ApplicationRecord
  belongs_to :user
  belongs_to :news_outlet
end
