Rails.application.routes.draw do
  get '/podcasts', to:'podcasts#home'
  get '/users/:id/podcasts', to: 'podcasts#index'
  post '/users/:id/podcasts', to: 'interests#addpodcast'
  get '/users/:id/news', to: 'news#index'
  post '/users/:id/news', to: 'interests#addnews'
  get '/users/:id/movies', to: 'movies#index'
  post '/users/:id/movies', to: 'interests#addmovie'
  get '/users/:id/tvshows', to: 'tvshows#index'
  get '/users/:id/sports', to: 'sports#index'
  post '/users/:id/sports', to: 'interests#addsport'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/login', to:'sessions#new'
  post '/login', to:'sessions#create'
  post '/logout', to:'sessions#delete'
  resources :users, :only => [:new, :create, :show]
end
