class UserNewsOutlet < ApplicationRecord
  belongs_to :user
  belongs_to :news_outlets
end
