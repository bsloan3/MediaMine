class Media < ApplicationRecord
  belongs_to :users
  belongs_to :mediable, polymorphic :true

# TR Thursday 4:30, called mediable to differentate with class name, can possible change to the proper english word media down line
  validates :user, :mediable_type, :mediable_id, presence: :true
end
