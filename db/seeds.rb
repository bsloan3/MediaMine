# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Interest.delete_all
Podcast.delete_all
NewsOutlet.delete_all
Tvshow.delete_all
Sport.delete_all
Movie.delete_all
User.delete_all



thomas = User.create(username: "thomas", email: "thomas@t.com", password: "1234", phone_number: "111-111-1111")

shaw = Movie.create(movie_name: "Shawshank Redemption")

sox = Sport.create(sport_name: "baseball", team_name: "Red Sox", league_name: "Major League Baseball", division_name: "American")

oc = Tvshow.create(show_name: "OC")

nbc = NewsOutlet.create(outlet_name: "NBC")

planet = Podcast.create(podcast_name: "Planet Money")

Interest.create(user: thomas, interestable: shaw)
Interest.create(user: thomas, interestable: sox)
Interest.create(user: thomas, interestable: oc)
Interest.create(user: thomas, interestable: nbc)
Interest.create(user: thomas, interestable: planet)
