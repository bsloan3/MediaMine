class User < ApplicationRecord
  validates :username, :email, presence: true, uniqueness:true
  has_many :user_movies
  has_many :user_news_outlets
  has_many :user_sports
  has_many :user_podcasts
  has_many :user_tvshows

  has_secure_password
end
