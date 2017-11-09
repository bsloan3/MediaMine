# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

thomas = User.create(username: "thomas", email: "thomas@t.com", password: "1234", phone_number: "111-111-1111")

shaw = Movie.create(movie_name: "Shawshank Redemption")

sox = Sport.create(sport_name: "baseball", team_name: "Red Sox", League: "Major League Baseball", division: "American")

oc = Tvshow.create(show_name: "OC")

nbc = Newsoutlet.create(outlet_name: "NBC")

planet = Podcast.create(podcast_name: "Planet Money")

Media.create(user: thomas, mediable: shaw)
Media.create(user: thomas, mediable: sox)
Media.create(user: thomas, mediable: oc)
Media.create(user: thomas, mediable: nbc)
Media.create(user: thomas, mediable: planet)
