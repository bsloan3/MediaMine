Rails.application.routes.draw do
  get '/podcasts', to: 'podcasts#index'
  get '/news', to: 'news#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/login', to:'sessions#new'
  post '/login', to:'sessions#create'
  post '/logout', to:'sessions#delete'
  resources :users, :only => [:new, :create, :show]
end
