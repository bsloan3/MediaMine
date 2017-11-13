class Interest < ApplicationRecord
  belongs_to :user
  belongs_to :interestable, polymorphic: :true

  # validates :user, :mediaable_type, :mediaable_id, presence: :true
  def self.search(search)
    joins(:podcasts).where("podcast_name ILIKE ?", "%#{search}%")
  end

end
