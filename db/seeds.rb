# require 'open-uri'
# require 'pry'
# require 'nokogiri'


# html = Nokogiri::HTML(open('http://www.tvguide.com/special/fall-preview/a-z/shows/asc/1/'))
# show_name = html.css('.seasonal-all-shows-item-show').map {|show| show.inner_text.strip}
# show_name = html.css('.seasonal-all-shows-item-premiere').map {|show| show.inner_text.strip}
# show_name = html.css('.seasonal-all-shows-item-network').map {|show| show.inner_text.strip}

# binding.pry
# puts 'stuff'


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
