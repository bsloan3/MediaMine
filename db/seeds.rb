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
CalendarEvent   .delete_all
User.delete_all



brad = User.create(username: "bsloan", email: "bsloan@umich.edu", password: "brad", phone_number: "111-111-1111")

movie1 = Movie.create(movie_name: "The Incredibles 2", movie_date: "2018-06-14", movie_image: "/hLa4UCNpor6Hz1JW2Gn3YpHtLBI.jpg")
movie2 = Movie.create(movie_name: "Justice League", movie_date: "2017-11-15", movie_image: "/9rtrRGeRnL0JKtu9IMBWsmlmmZz.jpg")

sport1 = Sport.create(team_name: "bos", league_name: "mlb")

show1 = Tvshow.create(show_name: "The OC")

news1 = NewsOutlet.create(outlet_name: "cnn")
news2 = NewsOutlet.create(outlet_name: "buzzfeed")

pod1 = Podcast.create(podcast_name:"Off Book", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/321908803&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
pod2 = Podcast.create(podcast_name:"Monday Morning Podcast", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/24758916&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
pod3 = Podcast.create(podcast_name:"The Empire Film Podcast", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/13178752&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
pod4 = Podcast.create(podcast_name:"BookD Podcast", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/39473817&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
pod5 = Podcast.create(podcast_name:"The Second Captains Podcast", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/44619822&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
pod6 = Podcast.create(podcast_name:"The Game Podcast", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/54149232&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"The JTrain Podcast", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/50596911&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"Podcast do Pretinho", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/54244466&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"The Times Red Box Podcast", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/47147192&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"Guys We F****d", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/68891950&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"The Cracked Podcast", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/54230392&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"The Bill Simmons Podcast", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/175240992&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"Guys We F****d", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/68891950&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"Sullivan & Son Podcast", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/47224186&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"The Jet Stream Podcast", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/50857695&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"Tearsheet Podcast", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/3059685&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"The Stack Overflow Podcast", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/4273388&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"True Story Podcast", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/33995690&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"The BBC Academy Podcast", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/50002953&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"The Truth Podcast", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/3334595&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"Greenpeace Podcast", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/42045507&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"FEaB Podcast", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/37812705&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"Writers' Bloc Podcast", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/24423170&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"Strangers Podcast", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/16633995&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"NextMarket Podcast", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/25140494&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"ThisisNotHappeningPodcast", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/46895479&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"The Bugle", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/9818871&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"The Long Shot Podcast", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/22277344&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"Rollin With Dice & Wheels", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/44649847&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"World Soccer Talk Podcast", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/17515660&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"Double Date Podcast", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/35132083&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"The Joe Budden Podcast", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/138976584&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"The Spoiler Guys Podcast", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/28550913&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"Cycling Central Podcast", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/10274030&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"Last Podcast On The Left", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/137846288&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"The Tom Barnard Show", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/37172358&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"Trading Views Podcast", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/45024963&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"99% Invisible", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/15894474&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"Crimetown", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/262443605&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"CriminalShow", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/69651204&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"Fresh Air From WHYY", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/24535277&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"The Nerdist", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/29213950&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"Love + Radio", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/1242667&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"No Such Thing As A Fish", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/11400353&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"How Did This Get Made?", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/4483139&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"Comedy Bang Bang", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/4474692&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"Kevin Pollak's Chat Show", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/38421714&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"BTW with Jeff Garlin", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/39194304&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"Analyzephish", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/39194810&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"improv4humans", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/31654283&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"The Wolf Den", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/4483100&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"Ronna and Beverly", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/31660079&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"Totally Laime", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/31651392&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"Nerd Poker", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/31656432&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"Affirmation Nation", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/4993881&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"NocturnalEmotions", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/31652144&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"This American Life", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/33831735&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"The Fantasy Footballers", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/158429108&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"The Moth", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/4439911&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"Sword and Scale", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/67176653&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"Radiolab", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/3439653&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"ComicsVerse", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/75186541&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"NPR's Planet Money", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/94917838&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"PBS News Hour", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/8377451&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"Marketplace", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/10953460&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"PRI's The World", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/3109678&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"The Glenn Beck Program", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/18121504&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"The NoSleep Podcast", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/254590219&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"StarTalk Radio", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/38128127&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"FiveThirtyEight", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/132853138&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"The Ringer NBA Show", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/214135598&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"Anna Faris is Unqualified", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/156018815&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"The Breakfast Club", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/261743075&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"Lights, Camera, Podcast", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/327820618&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"Chapo Trap House", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/211911700&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"New York Film Academy Hour", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/306130671&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"The ETC Podcast", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/135702648&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"Marvel Movie News", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/306130540&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"Disney Movie News", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/306130393&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"Broadway Breakdown", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/306130243&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"Otaku Movie Anatomy", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/306129879&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"The Unproduced Table Read", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/306129708&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"I Blame Dennis Hopper with Illeana Douglas", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/306129458&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"Screen Junkies Movie Fights", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/306128974&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"Sci Fi Weekly", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/306128820&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"Inside The Documentary", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/306128120&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"Jedi Alliance", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/306125272&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"DC Movie News", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/306116167&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"Box Office Breakdown", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/306115983&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"Popcorn Talk", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/141798121&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"Hamilton The Podcast", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/200659140&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"The Talk House", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/93565673&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"The Indoor Kids", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/37793930&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"Kinda Funny", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/113122676&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"Nerdist Writers Panel", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/37794987&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')
Podcast.create(podcast_name:"The Night Time Show", podcast_embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/211291732&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true')

Interest.create(user: brad, interestable: show1)
Interest.create(user: brad, interestable: sport1)
Interest.create(user: brad, interestable: movie1)
Interest.create(user: brad, interestable: movie2)
Interest.create(user: brad, interestable: news1)
Interest.create(user: brad, interestable: news2)
Interest.create(user: brad, interestable: pod1)
Interest.create(user: brad, interestable: pod2)
Interest.create(user: brad, interestable: pod3)
Interest.create(user: brad, interestable: pod4)
Interest.create(user: brad, interestable: pod5)
Interest.create(user: brad, interestable: pod6)

CalendarEvent.create(user:brad, title: "Supergirl", start: "2017-11-20 21:00:00", end: "2017-11-20 22:00:00")
CalendarEvent.create(user:brad, title: "Supergirl", start: "2017-11-27 09:00:00", end: "2017-11-27 10:00:00")
CalendarEvent.create(user:brad, title: "Supergirl", start: "2017-12-04 09:00:00", end: "2017-12-04 10:00:00")
CalendarEvent.create(user:brad, title: "Supergirl", start: "2017-12-11 09:00:00", end: "2017-12-11 10:00:00")
CalendarEvent.create(user:brad, title: "Supergirl", start: "2017-12-18 09:00:00", end: "2017-12-18 10:00:00")
CalendarEvent.create(user:brad, title: "Supergirl", start: "2017-12-25 09:00:00", end: "2017-12-25 10:00:00")

CalendarEvent.create(user:brad, title: "The Flash", start: "2017-11-21 09:00:00", end: "2017-11-21 10:00:00")
CalendarEvent.create(user:brad, title: "The Flash", start: "2017-11-28 09:00:00", end: "2017-11-28 10:00:00")
CalendarEvent.create(user:brad, title: "The Flash", start: "2017-12-05 09:00:00", end: "2017-12-05 10:00:00")
CalendarEvent.create(user:brad, title: "The Flash", start: "2017-12-12 09:00:00", end: "2017-12-12 10:00:00")
CalendarEvent.create(user:brad, title: "The Flash", start: "2017-12-19 09:00:00", end: "2017-12-19 10:00:00")
CalendarEvent.create(user:brad, title: "The Flash", start: "2017-12-26 09:00:00", end: "2017-12-26 10:00:00")

CalendarEvent.create(user:brad, title: "Arrow", start: "2017-11-23 09:00:00", end: "2017-11-23 10:00:00")
CalendarEvent.create(user:brad, title: "Arrow", start: "2017-11-30 09:00:00", end: "2017-11-30 10:00:00")
CalendarEvent.create(user:brad, title: "Arrow", start: "2017-12-07 09:00:00", end: "2017-12-07 10:00:00")
CalendarEvent.create(user:brad, title: "Arrow", start: "2017-12-14 09:00:00", end: "2017-12-14 10:00:00")
CalendarEvent.create(user:brad, title: "Arrow", start: "2017-12-21 09:00:00", end: "2017-12-21 10:00:00")
CalendarEvent.create(user:brad, title: "Arrow", start: "2017-12-28 09:00:00", end: "2017-12-28 10:00:00")
