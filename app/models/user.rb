class User < ApplicationRecord
  validates :username, :email, presence: true, uniqueness: true

  has_many :interests, dependent: :destroy
  has_many :calendar_events, dependent: :destroy

  has_secure_password
end
