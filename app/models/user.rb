class User < ApplicationRecord
  validates :username, :email, presence: true, uniqueness: true

  has_many :medias


  has_secure_password
end
