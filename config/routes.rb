Rails.application.routes.draw do
  get '/users/:id/podcasts', to: 'podcasts#index'
  get '/users/:id/news', to: 'news#index'
  get '/users/:id/movies', to: 'movies#index'
  get '/users/:id/tvshows', to: 'tvshows#index'
  get '/users/:id/sports', to: 'sports#index'
  get '/podcasts', to:'podcasts#home'
  post '/podcasts', to: 'interests#addpodcast'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/login', to:'sessions#new'
  post '/login', to:'sessions#create'
  post '/logout', to:'sessions#delete'
  resources :users, :only => [:new, :create, :show]
end
