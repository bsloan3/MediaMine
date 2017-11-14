Rails.application.routes.draw do
  get '/users/:id/podcasts', to: 'podcasts#index'
  post '/users/:id/podcasts', to: 'interests#addpodcast'
  get '/users/:id/news', to: 'news#index'
  get '/users/:id/movies', to: 'movies#index'
  post '/users/:id/movies', to: 'interests#addmovie'
  get '/users/:id/tvshows', to: 'tvshows#index'
  get '/users/:id/sports', to: 'sports#index'
  get '/podcasts', to:'podcasts#home'
  get '/users/:id/calendarevents', to: 'calendar_events#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/login', to:'sessions#new'
  post '/login', to:'sessions#create'
  post '/logout', to:'sessions#delete'
  resources :users, :only => [:new, :create, :show]

end
