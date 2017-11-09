class NewsOutlet < ApplicationRecord
  has_many :interests, as: :interestable, dependent: :destroy

end
