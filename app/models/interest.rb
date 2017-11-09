class Interest < ApplicationRecord
  belongs_to :user
  belongs_to :interestable, polymorphic: :true

  # validates :user, :mediaable_type, :mediaable_id, presence: :true
end
